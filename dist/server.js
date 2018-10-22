#!/usr/bin/env node
'use strict';

var express = require('express');
// const MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();
var port = 8080;
app.use(bodyParser.urlencoded({
  extended: true
}));
require('./routes')(app, {});

var path = require('path');
var appDir = path.dirname(require.main.filename);
console.log(appDir);

app.use('/pdf', express.static(appDir + '/pdf'));
app.listen(port, function () {
  console.log('We are live on ' + port);
});

require('./udp.js');