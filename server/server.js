'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var path = require('path');
var bodyParser = require('body-parser');

var app = module.exports = loopback();

// configure view handler
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// configure body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(loopback.token());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('\n API Bolsa de Trabajo \n Realizada por : Antonio Armero. \n Para IES DOS MARES.');
    console.log('----------------------------------------------------------');
    console.log('Servidor Web Node Escuchando Aqui: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Navega por la REST API en %s%s', baseUrl, explorerPath);
      console.log('----------------------------------------------------------');
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});