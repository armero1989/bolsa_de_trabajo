'use strict';
var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');

module.exports = function(Oferta) {



//enviar correo electrónico al administrador cuando se cree un nueva oferta nueva
	Oferta.afterRemote('create', function(context, oferta, next) {
		var html = '<h1>La oferta ' + oferta.puesto+ ' se ha registrado en la web</h1>' +
			'<ul>	<li>vacantes: ' + oferta.vacantes +
			'</li>	<li>Descripcion: ' + oferta.descripcion +
			'</li>	<li>En la Localidad : ' + oferta.localidad + 
			'</li>	<li>Con las siguientes condiciones:'+oferta.condiciones+'</li></ul>';

		Oferta.app.models.Email.send({
			to: config.admin.email,
			from: config.emailDs.transports[0].auth.user,
			subject: 'Nueva Oferta de '+oferta.puesto +' en la localidad de : '+oferta.localidad+'. Registrada en la Bolsa de Trabajo',
			text: 'La oferta ' + oferta.puesto+ ' se ha registrado en la web',
			html: html
		}, function(err, mail) {
			if (err) throw err;
			console.log('email sent!');
			next();
		});
	});





	Oferta.usuariosInscritos = function(id,cb){
			var Inscrito = app.models.Inscrito;
				
				Inscrito.count( {ofertaId: id}, function(err, count) {
		      		if (err) return cb(err);
		      		return cb(null,("El número de demandantes de empleo en esta oferta es de " + count));
		      	});




		};


Oferta.remoteMethod(
		'usuariosInscritos', {
			description: 'Devuelve el número de demandantes inscritos en la oferta',
			accepts: [{
					arg: 'id',
				type: 'integer',
				required: true
			}],
			returns: {
				arg: 'msg',
				type: 'string'
			},
			http: {
				path: '/:id/usuariosInscritos',
				verb: 'get'
			},
		}
);




};
