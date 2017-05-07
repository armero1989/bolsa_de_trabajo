angular
  .module('app')
  .factory('OfertService', ['Oferta', '$q', '$rootScope', function(Oferta, $q,
      $rootScope) {
   
    function create(puesto,vacantes,descripcion,experiencia,provincia,localidad,empresa,particular,
      salario_ofrecido,condiciones,otras_consideraciones,duracion_meses,fecha_caducidad) {
      return Oferta
        .create({
          puesto:puesto,
          vacantes:vacantes,
          descripcion:descripcion,
          experiencia:experiencia,
          provincia:provincia,
          localidad:localidad,
          empresa:empresa,
          particular:particular,
          salario_ofrecido:salario_ofrecido,
          condiciones:condiciones,
          otras_consideraciones:otras_consideraciones,
          duracion_meses:duracion_meses,
          fecha_caducidad:fecha_caducidad
       })
       .$promise;
    }


    return {
      create: create
    };
  }]);
