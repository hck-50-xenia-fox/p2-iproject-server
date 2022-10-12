const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORDTOKEN,
  },
});

function emailSender(user) {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: `Welcome to SewaMotor - ${user.name}`,
      html: `<div style="font-family: Helvetica;"><h1>Hello, ${user.name}</h1><br>Thank you for joining. SewaMotor.<br>Now, let's rent your dream bike and contribute to the community!</div>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('Error pakcik!', err)
      } else {
        console.log(`Email sent: ${user.email}`);
      }
    });
  });
}

module.exports = emailSender