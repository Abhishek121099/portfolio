# EmailJS Setup Guide - Quick Start

## Why is the contact form showing an error?

The contact form requires EmailJS credentials to be configured. Currently, the `.env` file is missing, which is why you're seeing errors.

## Quick Setup (5 minutes)

### 1. Sign up for EmailJS (Free)

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Connect Your Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your email provider
4. Follow the instructions to connect your Gmail account (`abhishekdongare99@gmail.com`)
5. **Copy your Service ID** (looks like: `service_xxxxxxx`)

### 3. Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Set the template name: `Portfolio Contact Form`

**Subject Line:**
```
{{subject}} - Portfolio Contact Form
```

**Content:**
```
New message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
This email was sent from your portfolio contact form.
```

4. **IMPORTANT:** In the template settings, set **To Email** to: `abhishekdongare99@gmail.com`
5. **Copy your Template ID** (looks like: `template_xxxxxxx`)

### 4. Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Scroll down to find **Public Key**
3. **Copy your Public Key** (looks like: `xxxxxxxxxxxxx`)

### 5. Create .env File

1. In your project root directory (`E:\React Projects\portfolio`), create a new file named `.env`
2. Add the following content (replace with your actual values):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_abc456
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### 6. Restart Your Dev Server

1. Stop your current dev server (Ctrl+C)
2. Start it again: `npm run dev`
3. The environment variables will now be loaded

### 7. Test the Form

1. Go to the Contact section on your portfolio
2. Fill out the form with test data
3. Click "Send Message"
4. Check your email inbox (`abhishekdongare99@gmail.com`) for the message

## Troubleshooting

### Still seeing errors?

1. **Check .env file exists:** Make sure `.env` is in the root directory (same level as `package.json`)
2. **Check variable names:** They must start with `VITE_` for Vite to recognize them
3. **Restart dev server:** Environment variables are only loaded when the server starts
4. **Check EmailJS dashboard:** Make sure your service is connected and template is published
5. **Check browser console:** Open DevTools (F12) and check for any error messages

### Common Issues

- **"EmailJS configuration is missing"**: Your `.env` file is missing or variables are incorrect
- **"Failed to send message"**: Check your EmailJS service connection or template settings
- **Email not received**: Check spam folder, verify recipient email in template settings

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

