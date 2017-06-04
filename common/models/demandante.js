'use strict';
var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');
module.exports = function(Demandante) {



Demandante.afterRemote('deleteById', function(context, demandante, next) {
		var Empresa = app.models.Empresa;
		var Demandante =app.models.Demandante;

		var html = '<h1>Se ha borrado un Demandante en la web</h1>' +
			
			'<p style="text-align:center;">Gracias por confiar en nuestra Bolsa de Trabajo.</p>' +
			'<p style="text-align:center;">Un saludo el Administrador de la Bolsa de Trabajo.</p>';
				
				Demandante.app.models.Email.send({
					to: config.admin.email,
					from: config.emailDs.transports[0].auth.user,
					subject: 'Demandante Borrado en la Bolsa de Trabajo',
					text: 'Demandante Borrado en la Bolsa de Trabajo',
					html: html
				}, function(err, mail) {
					if (err) throw err;
					console.log('email sent!');
					next();
				});
	
	});


};
