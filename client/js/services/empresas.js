angular
  .module('app')
  .factory('EmpreService', ['Empresa', '$q', '$rootScope', function(Empresa, $q,
      $rootScope) {
   
    function create(cif,nombre,direccion,email,provincia,localidad,telefono,url,fax,
      n_empleados,idsector) {
      return Empresa
        .create({
          cif:cif,
          nombre:nombre,
          direccion:direccion,
          email:email,
          provincia:provincia,
          localidad:localidad,
          telefono:telefono,
          url:url,
          fax:fax,
          n_empleados:n_empleados,
          idsector:idsector
       })
       .$promise;
    }


    return {
      create: create
    };
  }]);
