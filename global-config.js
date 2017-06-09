//Configuracion global
'use strict';

var url = require('url');

var conf = {
	hostname: process.env.HOST || 'localhost',
	port: process.env.HOSTPORT ||3000,
	restApiRoot: '/api', 
	legacyExplorer: false
};


conf.restApiUrl = url.format({
	protocol: 'http',
	slashes: true,
	hostname: conf.hostname,
	port: conf.port,
	pathname: conf.restApiRoot
});

module.exports = conf;