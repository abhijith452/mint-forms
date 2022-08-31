const transporter = require('../../../configs/nodemailer');
const logger = require('../../../utils/logger');
const nodemailer = require('nodemailer');
const sender = require('../notify2')


function notify(applicants) {

    // const content = {
    //     from: process.env.NODE_ENV === "production" ? process.env.MAIL_USER : "graciela.keeling37@ethereal.email",
    //     to: process.env.NODE_ENV === "production" ? emails : ["graciela.keeling37@ethereal.email", "cayla.wunsch44@ethereal.email"],
    //     subject: sub,
    //     text: msg

    // }
    applicants.forEach((app) => {
        transporter.sendMail(sender(app), (err, info) => {
            if (err) {
                logger.error(err)
                return;
            }
            logger.info("Send:" + info.response)
            if (process.env.NODE_ENV === "development") {
                logger.info(nodemailer.getTestMessageUrl(info))
            }
        })
    })

}

module.exports = notify;

