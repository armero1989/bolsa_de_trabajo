angular
.module('app')
.controller('MyDemandanteController', ['$scope', 'Demandante', 
      function($scope, Demandante) {
        $scope.$watch('currentUser.nombre', function(value) {
          if (!value) {
            return;
          }
      
      });
          $scope.Demandante = Demandante.findOne({
            filter: {
              where: {
                nombre: $scope.currentUser.nombre
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
       
}])