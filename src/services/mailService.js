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

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
