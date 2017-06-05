angular
  .module('app')
  .controller('AllOfertasController', ['$scope', 'Oferta', function($scope,
    Oferta) {
    function getfullOfertas() {
      $scope.Ofertas = Oferta.find({

      });
    }
    getfullOfertas();
  }])

.controller('CreateOfertaController', ['$scope', 'OfertService', '$state', function($scope,
    OfertService, $state) {

    $scope.action = 'Crear';
    $scope.Oferta = {
      puesto: '',
      vacantes: '',
      descripcion: '',
      experiencia: '',
      provincia: '',
      localidad: '',
      salario_ofrecido: '',
      condiciones: '',
      otras_consideraciones: '',
      duracion_meses: '',
      fecha_caducidad: '',
      cerrada: ''
    }

    $scope.create = function() {
      OfertService.create($scope.Oferta.puesto, $scope.Oferta.vacantes, $scope.Oferta.descripcion, $scope.Oferta.experiencia, $scope.Oferta.provincia,
          $scope.Oferta.localidad, $scope.Oferta.salario_ofrecido,
          $scope.Oferta.condiciones, $scope.Oferta.otras_consideraciones, $scope.Oferta.duracion_meses,
          $scope.Oferta.fecha_caducidad, $scope.Oferta.cerrada)
        .then(function() {});
    };

  }])
  .controller('MyOfertasController', ['$scope', 'Oferta', function($scope,
    Oferta) {
    $scope.action='Oferta';
    $scope.$watch('currentUser.id', function(value) {
      if (!value) {
        return;
      }

    });
    $scope.Ofertas = Oferta.find({
      filter: {
        where: {
          empresaId: $scope.currentUser.id
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
    });

  }])
  .controller('DeleteOfertaController', ['$scope', 'Oferta', '$state',
      '$stateParams', function($scope, Oferta, $state, $stateParams) {
    Oferta
      .deleteById({ id: $stateParams.id })
      .$promise
      .then(function() {
        $state.go('mioferta');
      });
  }])
  .controller('MyOfertasUpdateController', ['$scope', '$q', 'Oferta',
    '$stateParams', '$state',
    function($scope, $q, Oferta,
      $stateParams, $state) {

      $scope.action = 'Actualizar';
      $scope.Oferta = {};
      $q
        .all([
          Oferta.findById({
            id: $stateParams.id
          }).$promise
        ])
        .then(function(data) {

          var Ofertas = $scope.Oferta = data[0];
        })

      $scope.submitForm = function() {
         $scope.Oferta.id =  parseInt($scope.Oferta.id);
        $scope.Oferta.puesto =  $scope.Oferta.puesto;
        $scope.Oferta.vacantes = $scope.Oferta.vacantes;
        $scope.Oferta.descripcion = $scope.Oferta.descripcion;
        $scope.Oferta.experiencia = $scope.Oferta.experiencia;
        $scope.Oferta.provincia = $scope.Oferta.provincia;
        $scope.Oferta.localidad = $scope.Oferta.localidad;
        $scope.Oferta.salario_ofrecido = $scope.Oferta.salario_ofrecido;
        $scope.Oferta.condiciones = $scope.Oferta.condiciones;
        $scope.Oferta.otras_consideraciones = $scope.Oferta.otras_consideraciones;
        $scope.Oferta.duracion_meses = $scope.Oferta.duracion_meses;
        $scope.Oferta.fecha_caducidad = $scope.Oferta.fecha_caducidad;
        $scope.Oferta.cerrada = $scope.Oferta.cerrada;
        $scope.Oferta
          .$save()
          .then(function(Oferta) {
            $state.go('mioferta');
          });
      };
    }
  ])