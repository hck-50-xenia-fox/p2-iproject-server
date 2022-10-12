const nodemailer = require("nodemailer");

function mailer(data) {
  let mailTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smpt.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: "tahu.telor.404@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  let detail = {
    from: "tahu.telor.404@gmail.com",
    to: data,
    subject: "Congratulations",
    text: "Welcome Brother",
  };

  mailTransport.sendMail(detail, (err) => {
    if (err) {
      console.log(`Something went wrong!`, err);
    } else {
      console.log("success");
    }
  });
}

module.exports = mailer;
