

var dsConfig = require('../datasources.' + process.env.NODE_ENV + '.js');

module.exports = function(app) {
  var User = app.models.Usuario;

  app.get('/ping', function(req, res) {
    res.send('pong');
  });
};

