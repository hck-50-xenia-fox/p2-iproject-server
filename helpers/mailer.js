const nodemailer = require("nodemailer");

function mailer(data) {
  let mailTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smpt.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: "joyyy011@gmail.com",
      pass: process.env.pass,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  let detail = {
    from: "joyyy011@gmail.com",
    to: data,
    subject: "Congratulations",
    text: "DEWA KIPAS BOS!",
  };

  mailTransport.sendMail(detail, (err) => {
    if (err) {
      console.log(`Something went wrong!`, err);
    } else {
      console.log("success sending email");
    }
  });
}

module.exports = mailer;