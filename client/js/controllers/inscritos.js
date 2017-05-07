angular
  .module('app')
  .controller('OneInscritoController', ['$scope', 'Oferta', 'Inscrito', '$rootScope',
    function($scope, Oferta, Inscrito, $rootScope) {
      $scope.action = 'Añadir';
      $scope.Inscrito = {};
      $scope.isDisabled = false;
      $scope.Oferta={
        id:''
      }


      $scope.Ofertas = Oferta.find({

        })

      $scope.submitForm = function() {
        Inscrito
          .create({
            userId: $rootScope.currentUser.id,
            ofertaId: $scope.Oferta.id
          })
          
      };
    }
  ])