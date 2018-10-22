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
app.use('/pdf', express.static(process.cwd() + '/pdf'));
app.listen(port, function () {
  console.log('We are live on ' + port);
});

require('./udp.js');