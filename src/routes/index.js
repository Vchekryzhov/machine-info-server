// routes/index.js
const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
class Data {
  constructor() {
    this.machine = {};
  }
  // { id: '110', vel: 'vel1', speed: 'speed1' }
  setData(input) {
    let id = input['id'];
    this.machine = Object.assign(this.machine, {
      id: data
    });
  }
}

let data = new Data;
module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    console.log(req.body)
    res.send('qqq')
  });
  app.get('/get/*', (req, res) => {
    console.log(req.params);
    console.log(data);
    // res.send(data.machine[req.params[0]])
    res.send('finaltest')
  });
  app.get('/set', (req, res) => {
    console.log(req);
    data.set(req.quee);
    res.send('{"odin":"dva"}')
  });
};