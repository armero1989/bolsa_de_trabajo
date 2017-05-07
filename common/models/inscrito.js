'use strict';
var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');

module.exports = function(Inscrito) {


	Inscrito.validatesUniquenessOf('ofertaId');

	//enviar correo electrónico al administrador cuando se cree un nueva inscricion nueva
	Inscrito.afterRemote('create', function(context, inscrito, next) {
		var Usuario = app.models.Usuario;
		var Oferta =app.models.Oferta;
		Usuario.findOne({
			where: {
				id: inscrito.userId
			}
		}, function(err, usuario) {
			Oferta.findOne({
				where: {
					id: inscrito.ofertaId
				}
			}, function(err, oferta) {
			

					var html = '<h1>Usted ' + usuario.nombre + ' se ha registrado en la oferta: ' + oferta.puesto + '.</h1>'+
					
						'<h2>En la Empresa: '+oferta.empresa+' Con las siguientes Caracteristicas</h2><hr>'+
						'<ul>	<li>vacantes: ' + oferta.vacantes +
						'</li>	<li>Descripcion: ' + oferta.descripcion +
						'</li>	<li>Con experiencia : ' + oferta.experiencia +
						'</li>	<li>En la Provincia : ' + oferta.provincia +
						'</li>	<li>En la Localidad : ' + oferta.localidad +
						'</li>	<li>Con las siguientes condiciones:' + oferta.condiciones +
						'</li>	<li>Duracion de la Oferta en Meses:' + oferta.duracion_meses +
						'</li>	<li>Oferta valida hasta:' + oferta.fecha_caducidad +

						'</li></ul>' +
						'<p style="text-align:center;">Gracias por confiar en nuestra Bolsa de Trabajo.</p>' +
						'<p style="text-align:center;">Un saludo el Administrador de la Bolsa de Trabajo.</p>';

					Usuario.app.models.Email.send({
						to: usuario.email,
						from: process.env.ADMIN_EMAIL,
						subject: 'Usted ' + usuario.nombre + ' se ha registrado en la oferta: ' + oferta.puesto + '. De la Empresa '+oferta.empresa+'.',
						text: 'Usted ' + usuario.nombre + ' se ha registrado en la oferta: ' + oferta.puesto + '.',
						html: html
					}, function(err, mail) {
						if (err) throw err;
						console.log('email sent!');
						next();
					});

				
			});
		});

	});



};