angular
  .module('app')
  .factory('OfertService', ['Oferta', '$q', '$rootScope', function(Oferta, $q,
    $rootScope) {

    function create(puesto, vacantes, descripcion, experiencia, provincia, localidad,
      salario_ofrecido, condiciones, otras_consideraciones, duracion_meses, fecha_caducidad, cerrada) {
      return Oferta
        .create({
          puesto: puesto,
          vacantes: vacantes,
          descripcion: descripcion,
          experiencia: experiencia,
          provincia: provincia,
          localidad: localidad,
          salario_ofrecido: salario_ofrecido,
          condiciones: condiciones,
          otras_consideraciones: otras_consideraciones,
          duracion_meses: duracion_meses,
          fecha_caducidad: fecha_caducidad,
          cerrada: cerrada
        })
        .$promise;
    }
//no va preguntar a Alberto
    function buscar(puesto) {
      return Oferta
        .find({
          filter: {
            where: {
              puesto: puesto
            }
          },
          include: [
            "puesto",
            "vacantes",
            "descripcion",
            "experiencia",
            "provincia",
            "localidad",
            "salario_ofrecido",
            "condiciones",
            "otras_consideraciones",
            "duracion_meses",
            "fecha_caducidad",
            "cerrada"
          ]
        })
      .$promise
      .then(function(response) {
          $rootScope.Ofertas = {
           puesto: response.puesto,
          vacantes: response.vacantes,
          descripcion: response.descripcion,
          experiencia: response.experiencia,
          provincia: response.provincia,
          localidad: response.localidad,
          salario_ofrecido: response.salario_ofrecido,
          condiciones: response.condiciones,
          otras_consideraciones: response.otras_consideraciones,
          duracion_meses: response.duracion_meses,
          fecha_caducidad: response.fecha_caducidad,
          cerrada: response.cerrada
          };
        });
    }

    return {
      create: create,
      buscar: buscar
    };
  }]);