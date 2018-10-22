#!/usr/bin/env node
const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({
  extended: true
}) );
require('./routes')(app, {});
app.use('/pdf', express.static(process.cwd()+'/pdf') );
app.listen(port, () => {
  console.log('We are live on ' + port);
});

require('./udp.js');
