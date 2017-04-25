

var dsConfig = require('../datasources.' + process.env.NODE_ENV + '.js');

module.exports = function(app) {
  var User = app.models.Usuario;

 /* //login page
  app.get('/', function(req, res) {
    var credentials = dsConfig.emailDs.transports[0].auth;
    res.render('login', {
      email: credentials.user,
      password: credentials.pass
    });
  });

  //verified
  app.get('/verified', function(req, res) {
    res.render('verified');
  });*/
   // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
};

