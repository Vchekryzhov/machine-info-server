'use strict';

var _data = require('../data');

// routes/index.js
var noteRoutes = require('./note_routes');

module.exports = function (app, db) {
  noteRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
module.exports = function (app, db) {
  app.get('/get/*', function (req, res) {
    console.log(req.params[0]);
    console.log(_data.data.get(req.params[0]));
    res.send(_data.data.get(req.params[0]));
  });
  app.get('/test', function (req, res) {
    res.send({
      "test1": 'test'
    });
  });
  app.get('/set', function (req, res) {
    _data.data.set(req.query);
    console.log('set');
    res.send('ok');
  });
};