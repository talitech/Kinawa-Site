// Netlify Function to handle contact and quote form submissions
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    // Parse the form data
    const formData = new URLSearchParams(event.body);
    const formName = formData.get('form-name');
    
    // Check for honeypot field to prevent spam
    if (formData.get('bot-field')) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully' })
      };
    }

    // Create email transporter using Zoho Mail settings from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Process based on form type
    if (formName === 'contact') {
      // Contact form submission
      const name = formData.get('name');
      const company = formData.get('company') || 'Not provided';
      const email = formData.get('email');
      const phone = formData.get('phone') || 'Not provided';
      const subject = formData.get('subject');
      const inquiryType = formData.get('inquiry_type') || 'Not provided';
      const message = formData.get('message');

      // Email to the site owner
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'mikechumbakip@gmail.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company / Individual:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Inquiry Type:</strong> ${subject}</p>
          <p><strong>Service Focus:</strong> ${inquiryType}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Send auto-reply to the user
      const autoReplyOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Thank you for contacting Kinawa Energy',
        html: `
          <h2>Thank you for contacting Kinawa Energy</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
          <p>Your inquiry type was recorded as <strong>${subject}</strong>, and our team will review the details you shared.</p>
          <p>Best regards,<br>The Kinawa Energy Team</p>
        `
      };

      await transporter.sendMail(autoReplyOptions);
    } 
    else if (formName === 'quote') {
      // Quote form submission
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const projectType = formData.get('project_type');
      const location = formData.get('location');
      const budget = formData.get('budget');
      const message = formData.get('message');

      // Email to the site owner
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: 'mikechumbakip@gmail.com',
        subject: `New Quote Request: ${projectType}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Project Details:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      // Send auto-reply to the user
      const autoReplyOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Thank you for your quote request - Kinawa Energy',
        html: `
          <h2>Thank you for your quote request</h2>
          <p>Dear ${name},</p>
          <p>Thank you for requesting a quote from Kinawa Energy. We have received your information and our team will review your project details.</p>
          <p>We will get back to you within 2 business days with a customized proposal for your ${projectType} project in ${location}.</p>
          <p>If you have any questions in the meantime, please do not hesitate to contact us through the Kinawa Energy contact page.</p>
          <p>Best regards,<br>The Kinawa Energy Team</p>
        `
      };

      await transporter.sendMail(autoReplyOptions);
    }

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing form submission' })
    };
  }
}; 
