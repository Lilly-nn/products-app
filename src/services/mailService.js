import nodemailer from 'nodemailer';

export async function sendMail(email, subject, messageText) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NODEMAILER_EMAIL,
    replyTo: email,
    subject: subject,
    text: messageText,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log('Email Sent');
      return true;
    }
  });
}
