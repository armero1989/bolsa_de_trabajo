angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('ofertas', {
        url: '/api/Ofertas/Ofertas_find',
        templateUrl: 'views/ofertas.html',
        controller: 'AllOfertasController'
      })
      .state('forbidden', {
        url: '/api/usuarios/usuario_resetPassword',
        templateUrl: 'views/forbidden.ejs',
        controller:'AuthResetController'
      })
       .state('creaempresa', {
        url: '/api/Empresas/',
        templateUrl: 'views/createempresa.ejs',
        controller: 'CreateEmpresaController',
        authenticate:true
      })
       .state('datos', {
        url: '/api/Misdatos/',
        templateUrl: 'views/datos.ejs',
        controller: 'MyDemandanteController',
        authenticate:true
      })
       .state('creaoferta', {
        url: '/api/Ofertas/',
        templateUrl: 'views/createoferta.ejs',
        controller: 'CreateOfertaController',
        authenticate:true
      })
      .state('inscribirse', {
        url: '/api/inscritos/',
        templateUrl: 'views/inscrito.ejs',
        controller: 'OneInscritoController',
        authenticate:true
      })
      .state('login', {
        url: '/api/usuarios/login',
        templateUrl: 'views/login.ejs',
        controller: 'AuthLoginController'
      })
      .state('acredita', {
        url: '/acredita',
        templateUrl: 'views/acredita.html',
        controller: 'AuthLoginController',
        authenticate:true
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
  .run(['$rootScope', '$state', 'LoopBackAuth', 'AuthService', function($rootScope, $state, LoopBackAuth, AuthService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      // redirect to login page if not logged in
      if (toState.authenticate && !LoopBackAuth.accessTokenId) {
        event.preventDefault(); //prevent current page from loading

        // Maintain returnTo state in $rootScope that is used
        // by authService.login to redirect to after successful login.
        // http://www.jonahnisenson.com/angular-js-ui-router-redirect-after-login-to-requested-url/
        $rootScope.returnTo = {
          state: toState,
          params: toParams
        };

        $state.go('login');
      }
    });
        // Get data from localstorage after pagerefresh
    // and load user data into rootscope.
    if (LoopBackAuth.accessTokenId && !$rootScope.currentUser) {
      AuthService.refresh(LoopBackAuth.accessTokenId);
    }
  }]);


