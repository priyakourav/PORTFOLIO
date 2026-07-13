import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

// HTML Email Template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px;">
      <h2 style="color: #6D28D9;">New Portfolio Message</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Message:</strong></p>

      <blockquote style="border-left:4px solid #6D28D9; padding-left:10px;">
        ${userMessage}
      </blockquote>

      <hr />

      <p style="font-size:12px;color:#777;">
        This message was sent from your portfolio contact form.
      </p>
    </div>
  </div>
`;

// Send Email
async function sendEmail(payload) {
  const { name, email, message } = payload;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message from ${name}`,
    replyTo: email,
    html: generateEmailTemplate(name, email, message),
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Email Error:", error);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();

    const emailSuccess = await sendEmail(payload);

    if (emailSuccess) {
      return NextResponse.json(
        {
          success: true,
          message: "Message sent successfully!",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error occurred.",
      },
      { status: 500 }
    );
  }
}
