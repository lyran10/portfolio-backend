const nodeEmailer = require("nodemailer")
const SMTPTransport = require("nodemailer/lib/smtp-transport")

const sendEmail = async(subject,msg,from,reply_to) => { 
    const transporter = nodeEmailer.createTransport({
      service : process.env.SERVICE,
      host : process.env.EMAIL_HOST,
      // port : "587",
      auth : {
        user : `${process.env.USER_EMAIL}`,
        pass : `${process.env.USER_PASS}`
      },
      tls : {
        rejectUnauthorized : false
      }
    })  

    const options = {
      from : from,
      to : process.env.USER_EMAIL,
      subject : subject,
      replyTo : reply_to,
      html : msg
    }
 
   await transporter.sendMail(options,(err,info) => {
        if(err) console.log(err)
        else console.log(info)
    })
}

module.exports = sendEmail;

