'use strict';
var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');

module.exports = function(Usuario) {
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
					var html = '<h1>Eres Demandante ya Enorabuena ya puedes inscribirte  en nuestras ofertas</h1><hr>' +
						'<p>Usted ' + demandante.nombre + ' con email : ' + demandante.email + '. Registrada como Demandante en la Bolsa de Trabajo' +
						'</p> <ul>	<li>Nombre: ' + demandante.nombre +
						'</li>	<li>Email: ' + demandante.email +
						'</li>	<li>Telefono: ' + demandante.telefono + '</li></ul>' +
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

	Usuario.reset_password_get = function(accessToken, res, cb) {
		if (!accessToken) {
			var err = new Error('No existe el usuario');
			err.statusCode = 404;
			return cb(err);
		}
		return res.render('password-reset', {
			accessToken: accessToken.id
		});

	};

	Usuario.reset_password_post = function(passwords, accessToken, cb) {
		if (!accessToken) {
			var err = new Error('No existe el usuario');
			err.statusCode = 404;
			return cb(err);
		}

		//verify passwords match
		if (!passwords.password ||
			!passwords.confirmation ||
			passwords.password !== passwords.confirmation) {
			var err = new Error('Contraseñas incorrrectas');
			err.statusCode = 400;
			return cb(err);
		}

		Usuario.findById(accessToken.userId, function(err, user) {
			if (err) {
				var err = new Error('No existe el usuario');
				err.statusCode = 404;
				return cb(err);
			}
			user.updateAttribute('password', passwords.password, function(err, user) {
				if (err) {
					var err = new Error('Error al actualizar al usuario');
					err.statusCode = 404;
					return cb(err);
				}
				console.log('> password reset processed successfully');
				return cb(null, 'contraseña modificada correctamente')
			});
		});
	};

	//send verification email after registration
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

			console.log('> verification email sent:', response);

			context.res.render('response', {
				title: 'Registrado exitosamente',
				content: 'Recibiras un email de verificacion' +
					'Despues logueate',
				redirectTo: '/',
				redirectToLinkText: 'Log in'
			});
		});
	});

	//send password reset link when requested
	Usuario.on('resetPasswordRequest', function(info) {
		var url = 'http://' + config.hostname + ':' + config.port + '/api/Usuarios/reset_password';
		var html = 'Click <a href="' + url + '?access_token=' +
			info.accessToken.id + '">Aqui</a> para resaetear tu contraseña';

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
		'reset_password_get', {
			description: 'Mostrar el formulario para el cambio de contraseña.',
			accepts: [{
				arg: 'access_token',
				type: 'object',
				required: true,
				http: function(ctx) {
					var req = ctx && ctx.req;
					var accessToken = req && req.accessToken;

					return accessToken;
				}
			}, {
				arg: 'res',
				type: 'object',
				required: true,
				http: function(ctx) {
					var res = ctx && ctx.res;
					return res;
				}
			}, ],
			returns: {
				arg: 'tokenId',
				type: 'string'
			},
			http: {
				path: '/reset_password',
				verb: 'get'
			},
		}
	);

	Usuario.remoteMethod(
		'reset_password_post', {
			description: 'Permite generar una nueva contraseña para un usuario.',
			accepts: [{
				arg: 'passwords',
				type: 'object',
				required: true,
				http: {
					source: 'body'
				}
			}, {
				arg: 'access_token',
				type: 'object',
				required: true,
				http: function(ctx) {
					var req = ctx && ctx.req;
					var accessToken = req && req.accessToken;

					return accessToken;
				}
			}, ],
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