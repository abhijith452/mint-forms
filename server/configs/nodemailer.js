const nodemailer = require('nodemailer');

function createTransport() {
  const transporter = nodemailer.createTransport({
    host: process.env.NODE_ENV === 'production' ? process.env.MAIL_HOST : 'smtp.ethereal.email',
    // service:"hotmail",
    port: process.env.NODE_ENV === 'production' ? process.env.MAIL_PORT : 587,
    auth: {
      user: process.env.NODE_ENV === 'production' ? process.env.MAIL_USER : 'darius.friesen12@ethereal.email',
      pass: process.env.NODE_ENV === 'production' ? process.env.MAIL_PASSWORD : '1xsWcq95tyunFvZ2HG'
    }
  });

  return transporter

}



module.exports = createTransport();