// routes/index.js
const noteRoutes = require('./note_routes');
import {
  data
} from "../data";
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
module.exports = function(app, db) {
  app.get('/get/*', (req, res) => {
    console.log(req.params[0]);
    console.log(data.get(req.params[0]));
    res.send(data.get(req.params[0]))
  });
  app.get('/test', (req, res) => {
    res.send({
      "test1": 'test'
    })
  });
  app.post('/set', (req, res) => {
    data.set(req.body);
    res.send('ok')
  });
};