const transporter = require('../../../configs/nodemailer');
const logger = require('../../../utils/logger');
const nodemailer = require('nodemailer');
const pending = require('../../../mailTemplates/registerPending')


function notify(applicant) {

    const content = {
        from: process.env.NODE_ENV === "production" ? process.env.MAIL_USER : "graciela.keeling37@ethereal.email",
        to: process.env.NODE_ENV === "production" ? applicant.email : ["graciela.keeling37@ethereal.email", "cayla.wunsch44@ethereal.email"],
        subject: "IEEE Job Fair 2022 | Registration pending",
        html: pending({
            name: applicant.firstName + " " + applicant.lastName,
            orderId: applicant.orderId,
            amount: applicant.amount*100,
            paymentStatus: "pending",
            txnDate: applicant.txnDate,
            email: applicant.email,
            phone: applicant.phone
        })

    }

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

module.exports = notify;

