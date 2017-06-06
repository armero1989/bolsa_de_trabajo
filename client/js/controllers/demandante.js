angular
  .module('app')
  .controller('MyDemandanteController', ['$scope', 'Demandante',
    function($scope, Demandante) {
      $scope.action='Mi Demandante';
      $scope.$watch('currentUser.nombre', function(value) {
        if (!value) {
          return;
        }

      });
      $scope.Demandante = Demandante.findOne({
        filter: {
          where: {
            nombre: $scope.currentUser.nombre
          }
        },
        include: [
          "nombre",
          "apellidos",
          "email",
          "dni",
          "fecha_nac",
          "telefono",
          "sexo",
          "titulaciones",
          "experiencia",
          "idiomas",
          "conducir",
          "camion",
          "discapacitado"
        ]
      });

    }
  ])
  .controller('MyDemandantesUpdateController', ['$scope', '$q', 'Demandante',
    '$stateParams', '$state',
    function($scope, $q, Demandante,
      $stateParams, $state) {

      $scope.action = 'Actualizar';
      $scope.Demandante = {};
      $q
        .all([
          Demandante.findById({
            id: $stateParams.id
          }).$promise
        ])
        .then(function(data) {

          var Demandantes = $scope.Demandante = data[0];
        })

      $scope.submitForm = function() {
        $scope.Demandante.id = parseInt($scope.Demandante.id);
        $scope.Demandante.nombre = $scope.Demandante.nombre;
        $scope.Demandante.apellidos = $scope.Demandante.apellidos;
        $scope.Demandante.email = $scope.Demandante.email;
        $scope.Demandante.dni = $scope.Demandante.dni;
        $scope.Demandante.fecha_nac = $scope.Demandante.fecha_nac;
        $scope.Demandante.telefono = $scope.Demandante.telefono;
        $scope.Demandante.sexo = $scope.Demandante.sexo;
        $scope.Demandante.titulaciones = $scope.Demandante.titulaciones;
        $scope.Demandante.experiencia = $scope.Demandante.experiencia;
        $scope.Demandante.idiomas = $scope.Demandante.idiomas;
        $scope.Demandante.conducir = $scope.Demandante.conducir;
        $scope.Demandante.camion = $scope.Demandante.camion;
        $scope.Demandante.discapacitado = $scope.Demandante.discapacitado;
        $scope.Demandante
          .$save()
          .then(function(Demandante) {
            $state.go('datos');
          });
      };
    }
  ])