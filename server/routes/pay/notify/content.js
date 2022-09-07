const success = require('../../../mailTemplates/registerSuccess');
const failed = require('../../../mailTemplates/registerFailed');
const pending = require('../../../mailTemplates/registerPending');
const moment = require('moment')

function content(status, data, applicant,formDetails) {


    if (status === "success") {
        return {
            from: process.env.NODE_ENV === "production" ? process.env.MAIL_USER : "graciela.keeling37@ethereal.email",
            to: process.env.NODE_ENV === "production" ? applicant.email : "graciela.keeling37@ethereal.email",
            subject: `${formDetails.title} | Registration Successful`,
            cc: "backup@ieeejobfair.com",
            html: success(
                {
                    name: applicant.name,
                    orderId: data.orderId!==undefined?data.orderId:data.id,
                    amount: data.txnAmount,
                    paymentStatus: "success",
                    txnDate: data.txnDate,
                    txnId: data.txnId,
                    email: applicant.email,
                    phone: applicant.phone,
                    banner:process.env.NODE_ENV==="development"?`http://localhost:3000/form%20banners/${formDetails.banner}`:`${process.env.domain}/form%20banners/${formDetails.banner}`,
                    title:formDetails.title,
                    venue:formDetails.venue,
                    eventDate:formDetails.eventDate,
                    currency:data.currency,
                    domain:process.env.domain
                }
            )

        }
    }

    else if (status === "pending") {
        console.log(data)

        return {
            from: process.env.NODE_ENV === "production" ? process.env.MAIL_USER : "graciela.keeling37@ethereal.email",
            to: process.env.NODE_ENV === "production" ? applicant.email : "graciela.keeling37@ethereal.email",
            subject: `${formDetails.title} | Registration pending`,
            cc: "backup@ieeejobfair.com",

            html: pending(
                {
                    name: applicant.name,
                    orderId: data.id,
                    amount: data.amount,
                    paymentStatus: "pending",
                    txnDate: moment.unix(data.created_at).toISOString(),
                    email: applicant.email,
                    phone: applicant.phone,
                    banner:process.env.NODE_ENV==="development"?`http://localhost:3000/form%20banners/${formDetails.banner}`:`${process.env.domain}/form%20banners/${formDetails.banner}`,
                    title:formDetails.title,
                    venue:formDetails.venue,
                    eventDate:formDetails.eventDate,
                    formId:formDetails.formId,
                    currency:data.currency,
                    domain:process.env.domain
                }
            )
        }

    }
    else if (status === "failed") {
        return {
            from: process.env.NODE_ENV === "production" ? process.env.MAIL_USER : "graciela.keeling37@ethereal.email",
            to: process.env.NODE_ENV === "production" ? applicant.email : "graciela.keeling37@ethereal.email",
            subject: `${formDetails.title} | Registration failed`,
            cc: "backup@ieeejobfair.com",

            html: failed(
                {
                    name: applicant.name,
                    orderId: data.orderId,
                    amount: data.txnAmount,
                    paymentStatus: "failed",
                    txnDate: data.txnDate,
                    email: applicant.email,
                    phone: applicant.phone,
                    banner:process.env.NODE_ENV==="development"?`http://localhost:3000/form%20banners/${formDetails.banner}`:`${process.env.domain}/form%20banners/${formDetails.banner}`,
                    title:formDetails.title,
                    venue:formDetails.venue,
                    eventDate:formDetails.eventDate,
                    currency:data.currency,
                    domain:process.env.domain
                }
            )
        }
    }

}

module.exports = content;