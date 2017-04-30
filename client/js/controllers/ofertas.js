angular
  .module('app')
  .controller('AllOfertasController', ['$scope', 'Oferta', function($scope,
      Oferta) {
    $scope.Ofertas = Oferta.find({
      
    });
  }])
  
