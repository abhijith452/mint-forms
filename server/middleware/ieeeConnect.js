const ieeeConnection = require('../modules/ieee');
const moment = require('moment');

const checkIEEEConnection = async (req, res, next) => {
  if (ieeeConnection.ieeeToken === '') {
    await ieeeConnection.connectToIEEE();
  }
  var lastUpdatedTime = Math.trunc((moment()-moment(ieeeConnection.expiryTime))/(1000*60))
  if(lastUpdatedTime>50){
    await ieeeConnection.connectToIEEE();
  }
  next();
};

module.exports = checkIEEEConnection;
