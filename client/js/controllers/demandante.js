angular
.module('app')
.controller('MyDemandanteController', ['$scope', 'Demandante', '$rootScope', // comentarios del usuario logueado
      function($scope, Demandante,$rootScope) {
        
        // after a refresh, the currenUser is not immediately on the scope
        // So, we're watching it on the scope and load my reviews only then.
      
          $scope.Demandante = Demandante.findOne({
            filter: {
              where: {
                nombre: $rootScope.currentUser.nombre
              }
            },
              include: [
                "nombre",
                "apellidos",
                "email",
                "dni",
                "fecha_nac",
                "telefono",
                "sexo",
                "titulaciones",
                "experiencia",
                "idiomas",
                "conducir",
                "camion",
                "discapacitado"
              ]
            });
       
}]);