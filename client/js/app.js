angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('all-reviews', {
        url: '/api/Ofertas/Ofertas_find',
        templateUrl: 'views/ofertas.html',
        controller: 'AllOfertasController'
      })
      .state('forbidden', {
        url: '/api/usuarios/request_password_reset',
        templateUrl: 'views/forbidden.html',
      })
      .state('login', {
        url: '/api/usuarios/login',
        templateUrl: 'views/login.html',
        controller: 'AuthLoginController'
      })
      .state('acredita', {
        url: '/api/usuarios/login',
        templateUrl: 'views/acredita.html',
        controller: 'AuthLoginController'
      })
      .state('logout', {
        url: '/api/usuarios/logout',
        controller: 'AuthLogoutController'
      })
      .state('sign-up', {
        url: '/api/usuarios',
        templateUrl: 'views/sign-up-form.ejs',
        controller: 'SignUpController',
      })
      .state('sign-up-success', {
        url: '/sign-up/success',
        templateUrl: 'views/sign-up-success.html'
      });
    $urlRouterProvider.otherwise('/api/Ofertas/Ofertas_find');
  }])
  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
      if (next.authenticate && !$rootScope.currentUser) {
        event.preventDefault(); //prevent current page from loading
        $state.go('forbidden');
      }
    });
  }]);
