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
            email: email,
            admin:response.user.admin
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

    function register(email, password,nombre) {
      return User
        .create({
         email: email,
         password: password,
         nombre: nombre
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

    return {
      login: login,
      logout: logout,
      register: register,
      resetear:resetear
    };
  }]);
