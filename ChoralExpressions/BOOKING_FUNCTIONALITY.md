# Booking Functionality - Choral Expressions Website

## Overview

The Choral Expressions website includes a comprehensive booking form that allows potential clients to submit event inquiries directly through the website.

## What Happens When a User Books an Event

### 1. User Experience

**Step 1: Navigate to Booking Form**
- User clicks "Book Us" button in navigation
- Or clicks any "Book Your Event" / "Book Us for Your Event" buttons throughout the site
- Form is located in the "Book Your Event" section on the homepage (#contact)

**Step 2: Fill Out Booking Form**
User provides:
- **Name** (required)
- **Email Address** (required)
- **Phone Number** (optional)
- **Event Type** (required) - Dropdown with options:
  - Christmas Concert
  - Easter/Lenten Service
  - Black History Month
  - Wedding
  - Celebration of Life
  - Corporate Event
  - Store Opening
  - Other Celebration
- **Preferred Date** (required)
- **Venue Location** (required)
- **Additional Details** (optional) - Free text for special requests

**Step 3: Form Validation**
- Real-time validation as user types
- Required fields are marked with a gold asterisk (*)
- Error messages appear if fields are invalid or empty
- Email format is validated

**Step 4: Submit Inquiry**
- User clicks "Submit Inquiry" button
- Button shows loading state: "Sending..."
- Form is disabled during submission

**Step 5: Confirmation**
- Success message appears: "Thank you! Your booking inquiry has been sent successfully. We'll respond within one business day."
- Form fields are cleared
- User can submit another inquiry if needed

### 2. Backend Processing

**Email Delivery via Web3Forms**
1. Form data is sent to Web3Forms API (https://api.web3forms.com/submit)
2. Web3Forms processes the request and sends email to `cexpressionevents@gmail.com`
3. Email includes all booking details in a formatted layout

**Email Content Includes:**
```
Subject: New Booking Inquiry: [Event Type] - [Name]

BOOKING INQUIRY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Contact Information:
• Name: [User's Name]
• Email: [User's Email]
• Phone: [User's Phone or "Not provided"]

Event Details:
• Event Type: [Selected Event Type]
• Preferred Date: [Selected Date]
• Venue Location: [Venue Location]

Additional Details:
[User's additional details or "No additional details provided."]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: [Date and Time]
```

### 3. Choir Response Process

**What the Choir Should Do:**

1. **Check Email**: Monitor `cexpressionevents@gmail.com` for booking inquiries
2. **Review Details**: Read the event type, date, location, and special requests
3. **Respond Promptly**: Reply within one business day (as promised on the website)
4. **Follow Up**: Discuss availability, pricing, repertoire, and logistics with the client

## Error Handling

**If Email Fails to Send:**
- User sees error message: "Failed to send message. Please try again or contact us directly at cexpressionevents@gmail.com."
- User can retry submission
- User has fallback option to email directly

**Common Issues:**
- Network connectivity problems
- Web3Forms API temporarily unavailable
- Invalid access key (needs to be configured)

## Technical Details

**Technology Stack:**
- React form with controlled components
- Web3Forms API for email delivery
- Client-side validation
- Responsive design (works on mobile, tablet, desktop)

**Security:**
- No sensitive data stored in browser
- HTTPS encryption for form submission
- Spam protection via Web3Forms
- No database required

## Setup Required

⚠️ **IMPORTANT**: The booking form requires a Web3Forms access key to function.

See `EMAIL_SETUP.md` for detailed setup instructions.

Quick setup:
1. Get free access key from https://web3forms.com
2. Add key to `src/pages/Home.jsx` (line 63)
3. Deploy updated code

## Testing the Booking Form

1. Visit https://choral-expressions.fly.dev
2. Scroll to "Book Your Event" section or click "Book Us"
3. Fill out all required fields
4. Submit the form
5. Check `cexpressionevents@gmail.com` for the inquiry email

## Future Enhancements (Optional)

Potential improvements:
- Auto-reply email to user confirming receipt
- Calendar integration to check availability
- Pricing calculator based on event type
- File upload for venue photos or documents
- SMS notifications for urgent inquiries
- CRM integration for tracking leads

## Support

For technical issues with the booking form:
- Check browser console for errors
- Verify Web3Forms access key is configured
- Review `EMAIL_SETUP.md` for troubleshooting steps
