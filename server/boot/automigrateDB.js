module.exports = function(app) {
  if (process.env.AUTOMIGRATE) {
    var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
    app.dataSources.db.automigrate(lbTables, function(er) {
      if (er) throw er;
      console.log('--------------------------------------');
      console.log('Tablas Loopback [', lbTables, '] creadas en ', app.dataSources.db.adapter.name);
      var empleoTables = ['Usuario', 'Oferta', 'Empresa', 'Inscrito'];
      app.dataSources.db.automigrate(empleoTables, function(er) {
        if (er) throw er;
        console.log('Tablas Loopback [', empleoTables, '] creadas en ', app.dataSources.db.adapter.name);

        var config = require('../config.local.js');
        var Usuario = app.models.Usuario;
        var Role = app.models.Role;
        var RoleMapping = app.models.RoleMapping;


        Usuario.count(function(err, count) {
          if (err) throw err;

          if (count === 0) {
            console.log('----------------------------');
            console.log('Creacion de usuarios Pre-Establecidos');
            Usuario.create([{
              username: 'admin',
              apellidos: 'Plataforma',
              nombre: 'Administrador',
              email: config.admin.email,
              password: config.admin.password
            }], function(err, users) {
              if (err) throw err;

              // Create the admin role
              Role.create({
                name: 'admin'
              }, function(err, role) {
                if (err) throw err;
                console.log(role);

                // Make Bob an admin
                role.principals.create({
                  principalType: RoleMapping.USER,
                  principalId: users[0].id
                }, function(err, principal) {
                  if (err) throw err;
                  console.log(principal);
                });
              });
            });
          }
        });
      });
    });
  }
};