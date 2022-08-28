require('dotenv').config();
const express = require('express');
const logger = require("./utils/logger");
const next = require('next');
const bodyParser = require('body-parser');
var cors = require('cors')
const mongoose = require('mongoose')
const { connectToPaytm } = require('./modules/paytm');

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })



app.prepare().then(() => {
    const server = express()
    server.use(cors())
    connectToPaytm()

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }))
    server.route('/files/*').get((req, res) => {
      res.sendFile(process.cwd() + decodeURI(req.url));
    })
    server.route('/certificates/*').get((req, res) => {
        res.sendFile(process.cwd() + decodeURI(req.url));
      })
    server.get("/api/test", (req, res) => {
        return res.send("Hi")
    })
    server.all('*', (req, res) => {
        return handle(req, res)
    })
    mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(port, (err) => {
        logger.info(`> Connected to MongoDB`)
        if (err) throw err
        logger.info(`> Ready on http://localhost:${port}`)
    }))
    .catch((err) => logger.error(err))

})