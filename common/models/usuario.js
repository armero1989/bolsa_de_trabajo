'use strict';
var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');

module.exports = function(Usuario) {
	//Creacion de usuario
	Usuario.afterRemote('create', function(context, usuario, next) {
		var Demandante = app.models.Demandante;
		if (err) {
			var err = new Error('No se ha podido crear el demandante');
			err.statusCode = 500;
			next(err);
		}

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
				usuario.updateAttribute('demandanteId', usuario.id, function(err, usuario) {
					if (err) {
						var err = new Error('Error al al actualizar userid de Demandante ');
						err.statusCode = 404;
						next(err);
					}
					var html = '<h1>Eres Demandante ya Enhorabuena ya puedes inscribirte  en nuestras ofertas</h1><hr>' +
						'<p>Usted ' + demandante.nombre + ' con email : ' + demandante.email + '. Registrada como Demandante en la Bolsa de Trabajo' +
						'</p> <ul>	<li>Nombre: ' + demandante.nombre +
						'</li>	<li>Email: ' + demandante.email +
						'</li>	<li>Telefono: ' + demandante.telefono + '</li></ul>' +
						'<p>Usted ' + usuario.nombre + ' con email : ' + usuario.email + '. Registrada como Usuario en la Bolsa de Trabajo' +
						'</p> <ul>	<li>Nombre: ' + usuario.nombre +
						'</li>	<li>Email: ' + usuario.email +
						'</li>	<li>Telefono: ' + usuario.telefono + '</li></ul>' +
						'<p style="text-align:center;">Gracias por confiar en nuestra Bolsa de Trabajo.</p>' +
						'<p style="text-align:center;">Un saludo el Administrador de la Bolsa de Trabajo.</p>';

					Usuario.app.models.Email.send({
						to: demandante.email,
						from: process.env.ADMIN_EMAIL,
						subject: 'Usted ' + demandante.nombre + ' con email : ' + demandante.email + '. Registrada como Demandante en la Bolsa de Trabajo',
						text: 'Usted ' + demandante.nombre + ' con email : ' + demandante.email + '. Registrada como Demandante en la Bolsa de Trabajo',
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
//borrado de Usuario

Usuario.afterRemote('deleteById', function(context, usuario, next) {
		var Empresa = app.models.Empresa;
		var Demandante =app.models.Demandante;

		var html = '<h1>Se ha borrado un Usuario en la web</h1>' +
			
			'<p style="text-align:center;">Gracias por confiar en nuestra Bolsa de Trabajo.</p>' +
			'<p style="text-align:center;">Un saludo el Administrador de la Bolsa de Trabajo.</p>';
				
				Usuario.app.models.Email.send({
					to: config.admin.email,
					from: config.emailDs.transports[0].auth.user,
					subject: 'Usuario Borrado en la Bolsa de Trabajo',
					text: 'Usuario Borrado en la Bolsa de Trabajo',
					html: html
				}, function(err, mail) {
					if (err) throw err;
					console.log('email sent!');
					next();
				});
	
	});
//reseteo

	Usuario.request_password_reset = function(email, cb) {
		Usuario.resetPassword({
			email: email
		}, function(err) {
			if (err) {
				var err = new Error('No existe el email');
				err.statusCode = 401;
				return cb(err);
			}

			return cb(null, 'Password reset requested. Check your email for further instructions')
		});
	};

//cambio de Contraseña
	Usuario.reset_password_post = function(newPassword ,email, cb) {
		if (!email) {
			var err = new Error('No existe el usuario');
			err.statusCode = 404;
			return cb(err);
		}

		Usuario.findOne({
			where: {
				email:email
			}
		}, function(err, usuario) {
			if (err) {
				var err = new Error('No existe el usuario');
				err.statusCode = 404;
				return cb(err);
			}
			usuario.updateAttribute('password',newPassword, function(err, usuario) {
				if (err) {
					var err = new Error('Error al actualizar al usuario');
					err.statusCode = 404;
					return cb(err);
				}
				console.log('> contraseña resetada correctamente');
				return cb(null, 'contraseña modificada correctamente')
			});
		});
	};

//Registro
	Usuario.afterRemote('create', function(context, usuario, next) {
		console.log('> user.afterRemote triggered');

		var options = {
			type: 'email',
			to: usuario.email,
			from: config.emailDs.transports[0].auth.user,
			subject: 'Gracias por registrar en la Bolsa de Trabajo.',
			template: path.resolve(__dirname, '../../server/views/verify.ejs'),
			redirect: '/#/api/usuarios/login',
			user: usuario
		};

		usuario.verify(options, function(err, response) {
			if (err) {
				Usuario.deleteById(usuario.id);
				return next(err);
			}

			console.log('> verificacion email enviado:', response);

			context.res.render('response', {
				title: 'Registrado exitosamente',
				content: 'Recibiras un email de verificacion' +
					'Despues logueate',
				redirectTo: '/',
				redirectToLinkText: 'Log in'
			});
		});
	});


	Usuario.on('resetPasswordRequest', function(info) {
		var url = 'http://' + config.hostname + ':' + config.port + '/#/api/Usuario/setPassword/'+ info.email ;
		var html = 'Click <a href="' + url + '">Aqui</a> para resetear tu contraseña';

		Usuario.app.models.Email.send({
			to: info.email,
			from: info.email,
			subject: 'Resetear Contraseña',
			html: html
		}, function(err) {
			if (err) return console.log('> error envio de contraseña email');
			console.log('> enviado a :', info.email);
		});
	});

	Usuario.remoteMethod(
		'request_password_reset', {
			description: 'Solicita el reseteo de la contraseña.',
			accepts: [{
				arg: 'email',
				type: 'string'
			}, ],
			returns: {
				arg: 'msg',
				type: 'string'
			},
			http: {
				path: '/request_password_reset',
				verb: 'post'
			},
		}
	);

	

	Usuario.remoteMethod(
		'reset_password_post', {
			description: 'Permite generar una nueva contraseña para un usuario.',
			accepts: [{
				arg: 'newPassword',
				type: 'string',
				required: true
			},{
				arg: 'email',
				type: 'string',
				required: true
			} ],
			returns: {
				arg: 'msg',
				type: 'string'
			},
			http: {
				path: '/reset_password',
				verb: 'post'
			},
		}
	);

};