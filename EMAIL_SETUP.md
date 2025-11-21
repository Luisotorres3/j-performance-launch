# Email Setup Instructions

The contact form is currently configured to send emails using EmailJS (free service) with a fallback to the default mailto: link.

## Option 1: Set up EmailJS (Recommended - Free)

1. **Sign up for EmailJS**: Go to https://www.emailjs.com/ and create a free account

2. **Add an Email Service**:

   - Go to Email Services
   - Click "Add New Service"
   - Choose Gmail, Outlook, or any other email provider
   - Follow the connection steps

3. **Create an Email Template**:

   - Go to Email Templates
   - Click "Create New Template"
   - Use these template variables:

     ```
     From: {{from_name}} ({{from_email}})
     Phone: {{phone}}

     Message:
     {{message}}
     ```

   - Save the template and note the Template ID

4. **Update the Contact.tsx file**:

   - Replace `'service_jperformance'` with your Service ID
   - Replace `'template_contact'` with your Template ID
   - Replace `'YOUR_PUBLIC_KEY'` with your Public Key (found in Account > General)
   - Replace `'info@jperformance.com'` with your actual email address

5. **Test**: Submit a test message through the contact form

## Option 2: Use Mailto (Current Fallback)

The form already has a fallback that opens the user's email client. This will work without any setup but provides a less seamless experience.

## Update Social Media Links

Don't forget to update these links in both `Contact.tsx` and `Footer.tsx`:

- Instagram: Replace `/jperformancesystems` with your actual Instagram handle
- TikTok: Replace `/@jperformancesystems` with your actual TikTok handle
- Telegram: Replace `/jperformancesystems` with your actual Telegram username
- WhatsApp: Replace `34600000000` with your actual phone number (country code + number, no spaces or +)
- Phone numbers: Replace `+34 600 000 000` with your actual phone number

## Testing

1. Fill out the contact form
2. Click "Enviar mensaje"
3. Check your email inbox for the message
4. Click on the social media icons to verify they go to the correct profiles
