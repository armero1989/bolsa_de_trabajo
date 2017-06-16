angular
  .module('app')
  .controller('OneInscritoController', ['$scope', 'Oferta', 'Inscrito','$stateParams', '$state',
    function($scope, Oferta, Inscrito,
      $stateParams, $state) {
      $scope.action = 'Añadir';
      $scope.Inscrito = {};
      $scope.isDisabled = false;
      


        $scope.Oferta = Oferta.findById({
          id: $stateParams.id
        });

      $scope.submitForm = function() {
        Inscrito
          .create({
            ofertaId: $stateParams.id
          })
          
      };
    }
  ])