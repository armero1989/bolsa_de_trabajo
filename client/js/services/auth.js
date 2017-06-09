angular
  .module('app')
  .factory('AuthService', ['Usuario', '$q', '$rootScope', function(User, $q,
      $rootScope) {
    function login(email, password) {
      return User
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            Empresa:response.user.Empresa,
            demandante:response.user.demandanteId,
            email: email,
            admin:response.user.admin,
            nombre:response.user.nombre
          };
        });
    }

    function logout() {
      return User
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(email, password,nombre,telefono) {
      return User
        .create({
         email: email,
         password: password,
         nombre: nombre,
         telefono:telefono
        
       })
       .$promise;
    }
function resetear(email) {

      return User
        .request_password_reset({email: email})
        .$promise
        .then(function() {
         $rootScope.currentUser = null;
       });
      
    }

    function resetear2(password,email) {
 return User
.reset_password_post({newPassword:password},{email: email})
 .$promise
        .then(function() {
         $rootScope.currentUser = null;
       });   
      
    }
  function refresh(accessTokenId) {
      return User
        .getCurrent(function(userResource) {
          $rootScope.currentUser = {
            id: userResource.id,
            tokenId: accessTokenId,
            email: userResource.email,
            Empresa:userResource.Empresa,
            demandante:userResource.demandanteId,
            admin:userResource.admin,
            nombre:userResource.nombre
          };
        });
    }
    return {
      login: login,
      logout: logout,
      register: register,
      resetear:resetear,
      resetear2:resetear2,
      refresh:refresh
    };
  }]);
