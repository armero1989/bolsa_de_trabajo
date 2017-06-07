angular
  .module('app')
  .controller('UsuarioAdminController', ['$scope', 'Usuario',
    function($scope, Usuario) {
      $scope.action = "Usuario";
      $scope.Usuarios = Usuario.findById({
        
            id: '1'
    
      });

    }
  ])
  .controller('UsuariosFindController', ['$scope', 'Usuario',
    function($scope, Usuario) {
      $scope.action = "Usuario";
      $scope.Usuarios = Usuario.find({

      });

    }
  ])
  .controller('DeleteUsuarioController', ['$scope', 'Usuario', 'Demandante', '$state',
    '$stateParams',
    function($scope, Usuario, Demandante, $state, $stateParams) {
      Usuario
        .deleteById({
          id: $stateParams.id
        })
        .$promise;
      Demandante
        .deleteById({
          id: $stateParams.id
        })
        .$promise
        .then(function() {
          $state.go('usuarios');
        });
    }
  ])