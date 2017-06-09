'use strict';
var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');

module.exports = function(Empresa) {
//crear empresa
	Empresa.afterRemote('create', function(context, empresa, next) {
		var Usuario = app.models.Usuario;
		var Demandante = app.models.Demandante;
		if (err) {
			var err = new Error('No se ha podido crear el usuario empresa');
			err.statusCode = 500;
			next(err);
		}

		var data = {
			'nombre': empresa.nombre,
			'email': empresa.email,
			'password': '1234',
			'emailVerified': true,
			'Empresa': true,
			'telefono': empresa.telefono
		}
		Usuario.create(data, function(err, usuario) {
			if (err) {
				next(err);
			}
			console.log(usuario);

			var data = {
				'email': usuario.email,
				'nombre': usuario.nombre,
				'telefono': usuario.telefono,

			}
			Demandante.create(data, function(err, demandante) {
				if (err) {
					next(err);
				}
				console.log(demandante);
				demandante.updateAttribute('usuarioId', usuario.id, function(err, demandante) {
					if (err) {
						var err = new Error('Error al al actualizar userid de Demandante ');
						err.statusCode = 404;
						next(err);
					}
					usuario.updateAttribute('empresaId', usuario.id, function(err, usuario) {
						if (err) {
							var err = new Error('Error al al actualizar userid de Empresa ');
							err.statusCode = 404;
							next(err);
						}

						empresa.updateAttribute('usuarioId', usuario.id, function(err, empresa) {
							if (err) {
								var err = new Error('Error al al actualizar userid de Empresa ');
								err.statusCode = 404;
								next(err);
							}

							var html = '<h1>Su Empresa es ' + usuario.nombre + ' se ha registrado en la web</h1><hr>' +
								'<ul>	<li>Nombre: ' + usuario.nombre +
								'</li>	<li>Email: ' + usuario.email +
								'</li>	<li>Contraseña: ' + '1234' + '</li></ul>' +
								'<p style="text-align:center;">Gracias por confiar en nuestra Bolsa de Trabajo.</p>' +
								'<p style="text-align:center;">Un saludo el Administrador de la Bolsa de Trabajo.</p>';

							Usuario.app.models.Email.send({
								to: empresa.email,
								from: process.env.ADMIN_EMAIL,
								subject: 'Su Empresa es ' + usuario.nombre + ' con email : ' + usuario.email + '. Registrada como Empresa en la Bolsa de Trabajo',
								text: 'Su Empresa es ' + usuario.nombre + ' se ha registrado en la web',
								html: html
							}, function(err, mail) {
								if (err) throw err;
								console.log('email sent!');
								next();
							});
						});
					});
				});
			});
		});
	});

//borrar empresa
Empresa.afterRemote('deleteById', function(context, empresa, next) {
		var Empresa = app.models.Empresa;
		var Demandante =app.models.Demandante;

		var html = '<h1>Se ha borrado una Empresa en la web</h1>' +
			
			'<p style="text-align:center;">Gracias por confiar en nuestra Bolsa de Trabajo.</p>' +
			'<p style="text-align:center;">Un saludo el Administrador de la Bolsa de Trabajo.</p>';
				
				Empresa.app.models.Email.send({
					to: config.admin.email,
					from: config.emailDs.transports[0].auth.user,
					subject: 'Empresa Borrada en la Bolsa de Trabajo',
					text: 'Empresa Borrada en la Bolsa de Trabajo',
					html: html
				}, function(err, mail) {
					if (err) throw err;
					console.log('email sent!');
					next();
				});
	
	});


};