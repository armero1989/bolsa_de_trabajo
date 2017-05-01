angular
  .module('app')
  .controller('AuthLoginController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function() {
      AuthService.login($scope.user.email, $scope.user.password)
        .then(function() {
          $state.go('/api/usuarios/login');
        });
    };
  }])
  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    AuthService.logout()
      .then(function() {
        $state.go('/api/Ofertas/ofertas_find');
      });
  }])
  .controller('SignUpController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    $scope.user = {
      email: '',
      password: '',
      nombre:''
    };

    $scope.register = function() {
      AuthService.register($scope.user.email, $scope.user.password, $scope.user.nombre)
        .then(function() {
          $state.go('/api/usuarios/login');
        });
    };
  }]);
