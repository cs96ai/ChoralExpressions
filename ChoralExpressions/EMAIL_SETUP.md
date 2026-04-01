# Email Setup Guide for Booking Form

The booking form on the Choral Expressions website uses **Web3Forms** to send booking inquiries to `cexpressionevents@gmail.com`.

## Setup Instructions

### 1. Get Your Web3Forms Access Key

1. Go to https://web3forms.com
2. Enter your email address: `cexpressionevents@gmail.com`
3. Click "Get Access Key"
4. Check your email for the access key (it's free, no credit card required)

### 2. Add the Access Key to the Website

1. Open `src/pages/Home.jsx`
2. Find line 63 where it says:
   ```javascript
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from Web3Forms
4. Save the file

### 3. Deploy the Updated Code

```bash
# Commit the changes
git add .
git commit -m "Add Web3Forms access key for booking form"
git push

# Deploy to Fly.io
flyctl deploy
```

## How It Works

When a user fills out the booking form and clicks "Submit Inquiry":

1. **Form Validation**: The form validates all required fields
2. **Email Sent**: The booking details are sent to Web3Forms API
3. **Email Delivered**: Web3Forms forwards the inquiry to `cexpressionevents@gmail.com`
4. **Success Message**: User sees a confirmation that their inquiry was sent

## Email Format


choralexpressionss@gmail.com
Sutherlan1!

The booking inquiry email will include:

- **Contact Information**: Name, email, phone
- **Event Details**: Event type, preferred date, venue location
- **Additional Details**: Any special requests or information
- **Timestamp**: When the inquiry was submitted

## Testing

To test the booking form:

1. Fill out all required fields on the website
2. Submit the form
3. Check `cexpressionevents@gmail.com` for the booking inquiry email
4. The email should arrive within seconds

## Troubleshooting

**Form not sending?**
- Make sure you've replaced `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
- Check browser console for any error messages
- Verify the email address in Web3Forms matches `cexpressionevents@gmail.com`

**Not receiving emails?**
- Check spam/junk folder
- Verify the access key is correct
- Make sure the email address is verified in Web3Forms

## Alternative: Environment Variables (Recommended for Production)

For better security, you can use environment variables:

1. Create a `.env` file in the project root:
   ```
   VITE_WEB3FORMS_KEY=your_actual_access_key_here
   ```

2. Update `src/pages/Home.jsx` line 63:
   ```javascript
   access_key: import.meta.env.VITE_WEB3FORMS_KEY,
   ```

3. Add `.env` to `.gitignore` (already done)

4. Set the environment variable in Fly.io:
   ```bash
   flyctl secrets set VITE_WEB3FORMS_KEY=your_actual_access_key_here
   ```

## Support

- Web3Forms Documentation: https://docs.web3forms.com
- Web3Forms Support: support@web3forms.com
