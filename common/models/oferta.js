'use strict';
var config = require('../../server/config.local.js');
var path = require('path');
var app = require('../../server/server.js');

module.exports = function(Oferta) {



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
