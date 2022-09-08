const axios = require('axios');
const logger = require('../utils/logger');

async function connectToIEEE() {
  try {
    const url =
      process.env.NODE_ENV === 'production'
        ? 'https://services13.ieee.org/RST/api/oauth/token'
        : 'https://services15.ieee.org/RST/api/oauth/token';

    const formData = new URLSearchParams();
    formData.append('grant_type', 'client_credentials');
    formData.append('client_id', process.env.IEEEClientId);
    formData.append('client_secret', process.env.IEEEClientSecret);
    formData.append('scope', 'GetMemberStatus');

    const response = await axios.post(url, formData);
    logger.info(`> Connected to IEEE Servers`);
    console.log(response.data);
  } catch (err) {
    logger.error('Exception caught: ', err);
    console.log(err)
    return err;
  }
}

module.exports = { connectToIEEE };
