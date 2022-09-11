require('dotenv').config();
const express = require('express');
const logger = require('./utils/logger');
const next = require('next');
const bodyParser = require('body-parser');
const axios = require('axios');
var cors = require('cors');
const mongoose = require('mongoose');
const { connectToPaytm } = require('./modules/paytm');
const checkIEEEConnection = require('./middleware/ieeeConnect');
const ieeeConnection = require('./modules/ieee');
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const payRoute = require('./routes/pay');
const formRoute = require('./routes/form');

app.prepare().then(async () => {
  const server = express();
  server.use(cors());
  connectToPaytm();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.route('/files/*').get((req, res) => {
    res.sendFile(process.cwd() + decodeURI(req.url));
  });
  server.route('/certificates/*').get((req, res) => {
    res.sendFile(process.cwd() + decodeURI(req.url));
  });
  server.get('/api/test', (req, res) => {
    return res.send('Hi');
  });
  server.get('/api/getMemberStatus', checkIEEEConnection, async (req, res) => {
    try {
      const url =
        process.env.NODE_ENV === 'production'
          ? 'https://services13.ieee.org/RST/Customer/getstatus'
          : 'https://services11.ieee.org/RST/Customer/getstatus';
      var data = {
        MemberID: req.query.id,
      };
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${ieeeConnection.ieeeToken}`,
        },
      });
      return res.send(response.data);
    } catch (err) {
      logger.error('Exception caught: ', err);
      console.log(err);
      return res.status(400).send(err);
    }
  });

  server.use('/api/pay', payRoute);
  server.use('/api/form', formRoute);
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  mongoose
    .connect(process.env.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() =>
      server.listen(port, (err) => {
        logger.info(`> Connected to MongoDB`);
        if (err) throw err;
        logger.info(`> Ready on http://localhost:${port}`);
      })
    )
    .catch((err) => logger.error(err));
});
