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

var path = require('path');
var appDir = path.dirname(require.main.filename);
console.log(appDir);

app.use('/pdf', express.static(appDir+'/pdf') );
app.listen(port, () => {
  console.log('We are live on ' + port);
});

require('./udp.js');
