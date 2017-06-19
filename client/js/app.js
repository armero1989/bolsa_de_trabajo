angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
       .state('buscar', {
        url: '/api/Ofertas/buscador',
        templateUrl: 'views/buscador.ejs',
        controller: 'FindOfertaController'
      })
        .state('reset2', {
        url: '/api/Usuario/setPassword/:email',
        templateUrl: 'views/password-reset.ejs',
        controller: 'AuthReset2Controller'
      })
        .state('reset1', {
        url: '/api/Usuario/reset_request',
        templateUrl: 'views/password-reset-email.ejs',
        controller: 'AuthResetController'
      })
        .state('resul', {
        url: '/api/Ofertas/Ofertas_find/:puesto',
        templateUrl: 'views/ofertas.html',
        controller: 'ResulOfertaController'
      })
        .state('deleteempresa', {
        url: '/api/Empresas/Empresas_delete/:id',
        controller: 'DeleteEmpresaController',
        authenticate:true
      })
        .state('deleteusers', {
        url: '/api/Usuarios/Usuarios_delete/:id',
        controller: 'DeleteUsuarioController',
        authenticate:true
      })
      .state('empresas', {
        url: '/api/Empresas/Empresas_find',
        templateUrl: 'views/empresas.html',
        controller: 'AllEmpresaController'
      })
      .state('usuarios', {
        url: '/api/Usuario/Usuario_find',
        templateUrl: 'views/users.html',
        controller: 'UsuariosFindController'
      })
        .state('deleteoferta', {
        url: '/api/Ofertas/MisOfertas/Ofertas_delete/:id',
        controller: 'DeleteOfertaController',
        authenticate:true
      })
         .state('updatedatos', {
        url: '/api/Misdatos/:id',
        templateUrl: 'views/updatedemandante.ejs',
        controller: 'MyDemandantesUpdateController',
        authenticate:true
      })
      .state('updateempresa', {
        url: '/api/Ofertas/MiEmpresa/Empresas_update/:id',
        templateUrl: 'views/updateempresa.ejs',
        controller: 'MyEmpresasUpdateController',
        authenticate:true
      })
         .state('updateoferta', {
        url: '/api/Ofertas/MisOfertas/Ofertas_update/:id',
        templateUrl: 'views/updateoferta.ejs',
        controller: 'MyOfertasUpdateController',
        authenticate:true
      })
       .state('mioferta', {
        url: '/api/Ofertas/MisOfertas/Ofertas_find',
        templateUrl: 'views/miofertas.html',
        controller: 'MyOfertasController',
        authenticate:true
      })
      .state('ofertas', {
        url: '/api/Ofertas/Ofertas_find',
        templateUrl: 'views/ofertas.html',
        controller: 'AllOfertasController'
      })
       .state('creaempresa', {
        url: '/api/Empresas/',
        templateUrl: 'views/createempresa.ejs',
        controller: 'CreateEmpresaController',
        authenticate:true
      })
        .state('miempresa', {
        url: '/api/MiEmpresa',
        templateUrl: 'views/miEmpresa.ejs',
        controller: 'MyEmpresaController',
        authenticate:true
      })
       .state('datos', {
        url: '/api/Misdatos',
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
       .state('inscritos', {
        url: '/api/verinscritos/:id',
        templateUrl: 'views/insofert.html',
        controller: 'OfertaInscritoController',
        authenticate:true
      })
      .state('inscribirse', {
        url: '/api/inscritos/:id',
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
    $urlRouterProvider.otherwise('/api/Ofertas/buscador');
  }])
  .run(['$rootScope', '$state', 'LoopBackAuth', 'AuthService', function($rootScope, $state, LoopBackAuth, AuthService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {

      if (toState.authenticate && !LoopBackAuth.accessTokenId) {
        event.preventDefault(); 

        
        $rootScope.returnTo = {
          state: toState,
          params: toParams
        };

        $state.go('login');
      }
    });
       
    if (LoopBackAuth.accessTokenId && !$rootScope.currentUser) {
      AuthService.refresh(LoopBackAuth.accessTokenId);
    }
  }]);


