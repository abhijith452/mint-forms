const success = require('../../../mailTemplates/registerSuccess');
const failed = require('../../../mailTemplates/registerFailed');
const pending = require('../../../mailTemplates/registerPending');
const conSuccess = require('../../../mailTemplates/conferenceSuccess');
const conFailed = require('../../../mailTemplates/conferenceFailed');
const conPending = require('../../../mailTemplates/conferencePending');
const moment = require('moment');
const getPriceBreakdown = require('../../../utils/getPriceBreakdown');

function content(status, data, transaction, formDetails) {
  var priceInfo = {};
  var metadata = {
    from:
      process.env.NODE_ENV === 'production'
        ? process.env.MAIL_USER
        : 'graciela.keeling37@ethereal.email',
    to:
      process.env.NODE_ENV === 'production'
        ? data.email
        : 'graciela.keeling37@ethereal.email',
    html: {
      name: data.name,
      orderId: transaction.orderId,
      amount: transaction.txnAmount,
      txnDate: moment(transaction.txnDate).format('DD MMMM YYYY HH:MM:SS'),
      txnId: transaction.txnId,
      email: data.email,
      phone: data.phone,
      banner:
        process.env.NODE_ENV === 'development'
          ? `http://localhost:3000/form%20banners/${formDetails.banner}`
          : `${process.env.domain}/form%20banners/${formDetails.banner}`,
      title: formDetails.title,
      venue: formDetails.venue,
      eventDate: moment(formDetails.eventDate),
      currency: transaction.currency,
      domain: process.env.domain,
    },
  };

  if (status === 'success') {
    return {
      from: metadata.from,
      to: metadata.to,
      subject: `${formDetails.title} | Registration Successful`,
      cc: 'backup@ieee-mint.org',
      html: success({
        ...metadata.html,
        paymentStatus: 'success',
      }),
    };
  } else if (status === 'pending') {
    return {
      from: metadata.from,
      to: metadata.to,
      subject: `${formDetails.title} | Registration pending`,
      cc: 'backup@ieee-mint.org',

      html: pending({
        ...metadata.html,
        paymentStatus: 'pending',
        link:
          process.env.domain +
          'completepayment/' +
          transaction.paymentProvider +
          `/` +
          transaction.orderId,
      }),
    };
  } else if (status === 'failed') {
    return {
      from: metadata.from,
      to: metadata.to,
      subject: `${formDetails.title} | Registration failed`,
      cc: 'backup@ieee-mint.org',

      html: failed({
        paymentStatus: 'failed',
        ...metadata.html,
      }),
    };
  } else if (status === 'conPending') {
    priceInfo = getPriceBreakdown(data);
    return {
      from: metadata.from,
      to: metadata.to,
      subject: `${formDetails.title} | Registration pending`,
      cc: 'backup@ieee-mint.org',
      html: conPending({
        link:
          process.env.domain +
          'completepayment/' +
          transaction.paymentProvider +
          `/` +
          transaction.orderId,
        ...metadata.html,
        ...priceInfo,
      }),
    };
  } else if (status === 'conSuccess') {
    priceInfo = getPriceBreakdown(data);

    return {
      from: metadata.from,
      to: metadata.to,
      subject: `${formDetails.title} | Registration Successful`,
      cc: 'backup@ieee-mint.org',
      html: conSuccess({
        ...metadata.html,
        ...priceInfo,
      }),
    };
  } else if (status === 'conFailed') {
    priceInfo = getPriceBreakdown(data);

    return {
      from: metadata.from,
      to: metadata.to,
      subject: `${formDetails.title} | Registration failed`,
      cc: 'backup@ieee-mint.org',
      html: conFailed({
        ...metadata.html,
        ...priceInfo,
      }),
    };
  }
}

module.exports = content;
