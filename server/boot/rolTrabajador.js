module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('Trabajador', function(role, context, cb) {
    //El usuario debe estar logueado
    var userId = context.accessToken.userId;
    if (!userId) {
      //Si no es user devuelve un false
      return process.nextTick(() => cb(null, false));
    }
    //El usuario debe estar como creador de una inscrito.
  var inscrito = app.models.Inscrito;
      inscrito.count({
        userId: userId
      }, function(err, count) {
        if (err) return cb(err);
        if(count > 0){
          // Si count lo ha encontrado devuelve true, luego es "Trabajador"
          return cb(null, true);
        }else{
          return cb(null, false);
        }
    });
    
  });
}