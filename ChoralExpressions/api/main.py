from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
from pathlib import Path

app = FastAPI()

# CORS middleware to allow React frontend to call the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class BookingRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    eventType: str
    eventDate: str
    venueLocation: str
    details: str = ""

# Gmail configuration
GMAIL_USER = os.getenv("GMAIL_USER", "choralexpressionss@gmail.com")
GMAIL_PASS = os.getenv("GMAIL_PASS", "Sutherlan1!")
RECIPIENTS = ["claudiamitch01@gmail.com", "claudia.mitchell@rogers.com"]

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Choral Expressions Email API"}

@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "Email API is running"}

@app.post("/api/send-booking")
async def send_booking(booking: BookingRequest):
    try:
        # Create HTML email content
        html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{
            font-family: Arial, sans-serif;
            background-color: #1a0505;
            color: #ffffff;
            margin: 0;
            padding: 20px;
        }}
        .container {{
            max-width: 600px;
            margin: 0 auto;
            background-color: #2b1111;
            border-radius: 10px;
            padding: 30px;
            border: 2px solid #d4af37;
        }}
        .header {{
            text-align: center;
            border-bottom: 3px solid #d4af37;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }}
        .header h1 {{
            color: #d4af37;
            margin: 0;
            font-size: 28px;
        }}
        .header p {{
            color: #888;
            margin: 10px 0 0 0;
        }}
        .info-table {{
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }}
        .info-table tr {{
            border-bottom: 1px solid #444;
        }}
        .info-table td {{
            padding: 15px 10px;
        }}
        .info-table td:first-child {{
            color: #d4af37;
            font-weight: bold;
            width: 40%;
        }}
        .info-table td:last-child {{
            color: #ffffff;
        }}
        .details-section {{
            background-color: #1a0505;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
            border-left: 4px solid #d4af37;
        }}
        .details-section h3 {{
            color: #d4af37;
            margin-top: 0;
        }}
        .details-section p {{
            color: #cccccc;
            line-height: 1.6;
            white-space: pre-wrap;
        }}
        .footer {{
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #d4af37;
            color: #888;
            font-size: 12px;
        }}
        .icon {{
            color: #d4af37;
            margin-right: 8px;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎵 New Booking Inquiry</h1>
            <p>Choral Expressions Website</p>
        </div>

        <table class="info-table">
            <tr>
                <td><span class="icon">👤</span>Name:</td>
                <td>{booking.name}</td>
            </tr>
            <tr>
                <td><span class="icon">📧</span>Email:</td>
                <td><a href="mailto:{booking.email}" style="color: #d4af37; text-decoration: none;">{booking.email}</a></td>
            </tr>
            <tr>
                <td><span class="icon">📱</span>Phone:</td>
                <td>{booking.phone or 'Not provided'}</td>
            </tr>
            <tr>
                <td><span class="icon">🎭</span>Event Type:</td>
                <td>{booking.eventType}</td>
            </tr>
            <tr>
                <td><span class="icon">📅</span>Preferred Date:</td>
                <td>{booking.eventDate}</td>
            </tr>
            <tr>
                <td><span class="icon">📍</span>Venue Location:</td>
                <td>{booking.venueLocation}</td>
            </tr>
        </table>

        {"<div class='details-section'><h3>Additional Details:</h3><p>" + booking.details + "</p></div>" if booking.details else ""}

        <div class="footer">
            <p>Submitted on: {datetime.now().strftime('%A, %B %d, %Y at %I:%M %p EST')}</p>
            <p style="margin-top: 10px;">
                <strong>Next Steps:</strong> Please respond to this inquiry within one business day.
            </p>
        </div>
    </div>
</body>
</html>
        """

        # Create plain text version
        text_content = f"""
NEW BOOKING INQUIRY - CHORAL EXPRESSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Contact Information:
• Name: {booking.name}
• Email: {booking.email}
• Phone: {booking.phone or 'Not provided'}

Event Details:
• Event Type: {booking.eventType}
• Preferred Date: {booking.eventDate}
• Venue Location: {booking.venueLocation}

Additional Details:
{booking.details or 'No additional details provided.'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        """

        # Create message
        message = MIMEMultipart("alternative")
        message["Subject"] = f"New Booking Inquiry: {booking.eventType} - {booking.name}"
        message["From"] = f"Choral Expressions Website <{GMAIL_USER}>"
        message["To"] = ", ".join(RECIPIENTS)
        message["Reply-To"] = booking.email

        # Attach both plain text and HTML versions
        part1 = MIMEText(text_content, "plain")
        part2 = MIMEText(html_content, "html")
        message.attach(part1)
        message.attach(part2)

        # Send email via Gmail SMTP
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(GMAIL_USER, GMAIL_PASS)
            server.send_message(message)

        return {
            "success": True,
            "message": "Booking inquiry sent successfully"
        }

    except smtplib.SMTPAuthenticationError:
        raise HTTPException(
            status_code=500,
            detail="Email authentication failed. Please check Gmail credentials."
        )
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to send email: {str(e)}"
        )

# Mount static files (React build)
static_path = Path(__file__).parent.parent / "static"
if static_path.exists():
    app.mount("/assets", StaticFiles(directory=str(static_path / "assets")), name="assets")
    
    # Catch-all route for React Router (SPA)
    @app.get("/{full_path:path}")
    async def serve_react(full_path: str):
        # If it's an API route, let it pass through
        if full_path.startswith("api/"):
            raise HTTPException(status_code=404, detail="API endpoint not found")
        
        # For all other routes, serve index.html (React will handle routing)
        index_file = static_path / "index.html"
        if index_file.exists():
            return FileResponse(index_file)
        raise HTTPException(status_code=404, detail="File not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
