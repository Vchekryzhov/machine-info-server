// routes/index.js
const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов
};
module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    console.log(req.body)
    res.send('qqq')
  });
  app.get('/notes', (req, res) => {
    res.send('dataaaaaaaaaaaaaaaaaaaaaaaaaa')
  });
};