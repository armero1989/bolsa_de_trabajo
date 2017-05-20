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
          $state.go('ofertas');
        });
    };
  }])
  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    AuthService.logout()
      .then(function() {
        $state.go('ofertas');
      });
  }])
  .controller('SignUpController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    $scope.user = {
      email: '',
      password: '',
      nombre:'',
      telefono:''
    };

    $scope.register = function() {
      AuthService.register($scope.user.email, $scope.user.password, $scope.user.nombre,$scope.user.telefono)
        .then(function() {
          $state.transitionTo('login');
        });
    };
  }])
 .controller('AuthResetController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    $scope.user = {
      email: ''
    };

    $scope.resetear = function() {
      AuthService.resetear($scope.user.email)
        .then(function() {
           $state.includes("access_token", {access_token:access_token});
        });
    };
  }])
