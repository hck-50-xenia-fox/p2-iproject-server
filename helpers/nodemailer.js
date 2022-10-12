const nodemailer = require('nodemailer');

function mailer(data){
    let mailTransport = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "aryayudhazachri09@gmail.com",
            pass: "uqgnvosxizgywyyy"
        },
        port: 587,
        host: "smpt.gmail.com"
    })
    let detail = {
        from : "aryayudhazachri09@gmail.com",
        to: data,
        subject: "Success create account",
        text: "Your account successfully created! You can buy now"
    }
    mailTransport.sendMail(detail, (err) => {
        if(err){
            console.log("Oops.. Something Wrong", err)
        } else {
            console.log("Success")
            // console.log(detail)
        }
    })
}

module.exports = mailer