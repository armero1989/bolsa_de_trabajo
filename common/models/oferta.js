'use strict';
var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');

module.exports = function(Oferta) {

Oferta.observe('before save', function (ctx, next) {
		if (ctx.isNewInstance) {
			if (ctx.instance) {
				var fecha=new Date();
				console.log(fecha);
				ctx.instance.unsetAttribute('created_at');
				ctx.instance.created_at=new Date();
				ctx.instance.unsetAttribute('empresaId');
				ctx.instance.empresaId=ctx.options && ctx.options.accessToken && ctx.options.accessToken.userId;
				ctx.instance.unsetAttribute('demandanteId');
				ctx.instance.demandanteId=ctx.options && ctx.options.accessToken && ctx.options.accessToken.userId;
			} 
		}
		next();
});

	//enviar correo electrónico al administrador cuando se cree un nueva oferta nueva
	Oferta.afterRemote('create', function(context, oferta, next) {
		var Empresa = app.models.Empresa;
		var Demandante =app.models.Demandante;

		var html = '<h1>La oferta ' + oferta.puesto + ' se ha registrado en la web</h1>' +
			'<h2>Con las siguientes Caracteristicas</h2><hr>' +
			'<ul>	<li>vacantes: ' + oferta.vacantes +
			'</li>	<li>Descripcion: ' + oferta.descripcion +
			'</li>	<li>Con experiencia : ' + oferta.experiencia +
			'</li>	<li>En la Provincia : ' + oferta.provincia +
			'</li>	<li>En la Localidad : ' + oferta.localidad +
			'</li>	<li>Salario Ofrecido : ' + oferta.salario_ofrecido +'€'+
			'</li>	<li>Con las siguientes Condiciones:' + oferta.condiciones +
			'</li>	<li>Con las siguientes Otras Consideraciones:' + oferta.otras_consideraciones +
			'</li>	<li>Duracion de la Oferta en Meses:' + oferta.duracion_meses +
			'</li>	<li>Oferta valida hasta:' + oferta.fecha_caducidad +
			'</li></ul>' +
			'<p style="text-align:center;">Gracias por confiar en nuestra Bolsa de Trabajo.</p>' +
			'<p style="text-align:center;">Un saludo el Administrador de la Bolsa de Trabajo.</p>';
				
				Oferta.app.models.Email.send({
					to: config.admin.email,
					from: config.emailDs.transports[0].auth.user,
					subject: 'Nueva Oferta de ' + oferta.puesto + ' en la localidad de : ' + oferta.localidad + '. Registrada en la Bolsa de Trabajo',
					text: 'La oferta ' + oferta.puesto + ' se ha registrado en la web',
					html: html
				}, function(err, mail) {
					if (err) throw err;
					console.log('email sent!');
					next();
				});
	
	});

Oferta.afterRemote('deleteById', function(context, oferta, next) {
		var Empresa = app.models.Empresa;
		var Demandante =app.models.Demandante;

		var html = '<h1>Se ha borrado una Oferta en la web</h1>' +
			
			'<p style="text-align:center;">Gracias por confiar en nuestra Bolsa de Trabajo.</p>' +
			'<p style="text-align:center;">Un saludo el Administrador de la Bolsa de Trabajo.</p>';
				
				Oferta.app.models.Email.send({
					to: config.admin.email,
					from: config.emailDs.transports[0].auth.user,
					subject: 'Oferta Borrada en la Bolsa de Trabajo',
					text: 'Oferta Borrada en la Bolsa de Trabajo',
					html: html
				}, function(err, mail) {
					if (err) throw err;
					console.log('email sent!');
					next();
				});
	
	});

	Oferta.usuariosInscritos = function(id, cb) {
		var Inscrito = app.models.Inscrito;

		Inscrito.count({
			ofertaId: id
		}, function(err, count) {
			if (err) return cb(err);
			return cb(null, (count));
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
				arg: 'Demandantes',
				type: 'number'
			},
			http: {
				path: '/:id/usuariosInscritos',
				verb: 'get'
			},
		}
	);



};