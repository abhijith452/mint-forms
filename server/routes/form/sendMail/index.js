const transporter = require('../../../configs/nodemailer');
const logger = require('../../../utils/logger');
const nodemailer = require('nodemailer');

function sendMail(email, subject, html,text) {
    const content = {
        from: process.env.NODE_ENV === "production" ? process.env.MAIL_USER : "graciela.keeling37@ethereal.email",
        to: process.env.NODE_ENV === "production" ? email : ["graciela.keeling37@ethereal.email", "cayla.wunsch44@ethereal.email"],
        subject: subject,
        cc:"backup@ieeejobfair.com,abhijithkannan452@gmail.com"
    }

    if (html !== undefined)
        content.html = html
    if (text !== undefined)
        content.text = text

    transporter.sendMail(content, (err, info) => {
        if (err) {
            logger.error(err)
            return;
        }
        logger.info("Send:" + info.response)
        if (process.env.NODE_ENV === "development") {
            logger.info(nodemailer.getTestMessageUrl(info))
        }
    })
}
module.exports = sendMail;
