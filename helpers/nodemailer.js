const nodemailer = require('nodemailer');
require('dotenv').config()

function mailer(data) {
  console.log(process.env.password);
  let mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testiproject567@gmail.com",
      pass: process.env.password, //! ini passwordnya di simpan di env
    },
    port: 587,
    host: 'smpt.gmail.com'
  })
  let detail = {
    from : 'testiproject567@gmail.com',
    to : data,
    subject : 'Hello',
    text : "Anda Berhasil Login"
  }
  mailTransport.sendMail(detail, (err) => {
    if (err) {
      console.log(`Something went wrong!`, err);
    }
    else {
      console.log('success');
    }
  })
}

module.exports = mailer