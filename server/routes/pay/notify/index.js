const transporter = require('../../../configs/nodemailer');
const content = require('./content');
const logger = require('../../../utils/logger');
const nodemailer = require('nodemailer');

function notify(status, response, txnInfo, formDetails) {

  transporter.sendMail(
    content(status, response, txnInfo, formDetails),
    (err, info) => {
      if (err) {
        logger.error(err);
        return;
      }
      logger.info('Send:' + info.response);
      if (process.env.NODE_ENV === 'development') {
        logger.info(nodemailer.getTestMessageUrl(info));
      }
    }
  );
}

module.exports = notify;
