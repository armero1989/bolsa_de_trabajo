module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('Empresa', function(role, context, cb) {
    //El usuario debe estar logueado
    var userId = context.accessToken.userId;
    if (!userId) {
      //Si no es user devuelve un false
      return process.nextTick(() => cb(null, false));
    }
    //El usuario debe estar como creador de un Oferta
    var Oferta = app.models.Oferta;
    Oferta.count({
      empresaId: userId
    }, function(err, count) {
      if (err) return cb(err);
      if (count > 0) {
        // Si count lo ha encontrado devuelve true, luego es "Empresa"
        return cb(null, true);
      } else {
        return cb(null, false);
      }
    });

  });
}