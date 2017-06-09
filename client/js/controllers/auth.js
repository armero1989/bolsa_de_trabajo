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
             // return to saved returnTo state before redirection to login
          if ($scope.returnTo && $scope.returnTo.state) {
            $state.go(
              $scope.returnTo.state.name,
              $scope.returnTo.params
            );
            // maintain the inherited rootscope variable returnTo
            // but make the returnTo state of it null,
            // so it can be used again after a new login.
            $scope.returnTo.state  = null;
            $scope.returnTo.params = null;
            return;
          }
          $state.go('buscar');
        });
    };
  }])
  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    AuthService.logout()
      .then(function() {
        $state.go('buscar');
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
           
        });
    };
  }])
 .controller('AuthReset2Controller', ['$scope', 'AuthService', '$state','$stateParams',
      function($scope, AuthService, $state, $stateParams) {
      
      $scope.email=$stateParams.email;
    $scope.user = {
     newPassword:''
    };

    $scope.resetear = function() {
      AuthService.resetear2($scope.user.newPassword,$scope.email)
        .then(function() {
          $state.go('login');
        });
    };
  }])

