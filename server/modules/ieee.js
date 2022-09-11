const axios = require('axios');
const logger = require('../utils/logger');
const moment = require('moment');
class ieee {
  constructor() {
    this.ieeeToken = '';
    this.expiryTime = '';
  }

  async connectToIEEE() {
    try {
      const url =
        process.env.NODE_ENV === 'production'
          ? 'https://services13.ieee.org/RST/api/oauth/token'
          : 'https://services11.ieee.org/RST/api/oauth/token';

      const formData = new URLSearchParams();
      formData.append('grant_type', 'client_credentials');
      formData.append('client_id', process.env.IEEEClientId);
      formData.append('client_secret', process.env.IEEEClientSecret);
      formData.append('scope', 'GetMemberStatus');

      var ieeeConnection = await axios.post(url, formData);
      this.ieeeToken = ieeeConnection.data.access_token;
      this.expiryTime = moment().toISOString()
      logger.info(`> Connected to IEEE Servers`);

      return this
      // console.log(response.data);
    } catch (err) {
      logger.error('Exception caught: ', err);
      // console.log(err)
      return err;
    }
  }

  getToken(){
    return this.ieeeToken
  }
}

const ieeeConnection = new ieee()

module.exports =ieeeConnection;
