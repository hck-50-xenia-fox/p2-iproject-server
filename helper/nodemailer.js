const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.AUTH,
  },
});

function emailSend(dataUser) {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: process.env.EMAIL,
      to: dataUser.email,
      subject: `Welcome to Youtube - ${dataUser.username}`,
      html: `<div style="font-family: Helvetica;"><h1>Hello, ${dataUser.username}</h1><br>Thank you for joining. Youtube.</div>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Error pakcik!", err);
      } else {
        console.log(`Email sent: ${dataUser.email}`);
      }
    });
  });
}

module.exports = emailSend;
