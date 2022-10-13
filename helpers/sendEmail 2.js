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
      html: `<div style="font-family: Helvetica;"><h1>Welcome! ${user.name}</h1><br><h2>You're in The Right Place!</h2><br>Enjoy the versatility of a scooter bike? Great news we've got what you need, let's rent our bike and enjoy Depok!</div>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('Error, nih!', err)
      } else {
        console.log(`Email sent: ${user.email}`);
      }
    });
  });
}

module.exports = emailSender