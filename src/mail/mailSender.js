import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,          // e.g., smtp-relay.brevo.com
  port: Number(process.env.SMTP_PORT),  // 587
  secure: false,                        // true only for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: true
  }
});

// Send email example
await transporter.sendMail({
  from: `"Sambhaji Maharaj Jayanti" <noreply@yourdomain.com>`,
  to: "recipient@email.com",
  subject: "Registration Confirmed",
  html: `<h2>🎉 Your registration is successful!</h2><p>See you on 14 May at Janta Raja Maidan, Sangamner.</p>`
});