angular
  .module('app')
  .controller('AllOfertasController', ['$scope', 'Oferta', function($scope,
      Oferta) {
    function getfullOfertas(){
    $scope.Ofertas = Oferta.find({
      
    });
  }
  getfullOfertas();
  }])
  
 .controller('CreateOfertaController', ['$scope', 'OfertService', '$state',function($scope,
      OfertService,$state) {

 	$scope.Oferta={
        puesto:'',
        vacantes:'',
        descripcion:'',
        experiencia:'',
        provincia:'',
        localidad:'',
        salario_ofrecido:'',
        condiciones:'',
        otras_consideraciones:'',
        duracion_meses:'',
        fecha_caducidad:'',
        cerrada:''
      }

     $scope.create = function() {
      OfertService.create($scope.Oferta.puesto,$scope.Oferta.vacantes,$scope.Oferta.descripcion,$scope.Oferta.experiencia,$scope.Oferta.provincia,
      	$scope.Oferta.localidad,$scope.Oferta.salario_ofrecido,
      	$scope.Oferta.condiciones,$scope.Oferta.otras_consideraciones,$scope.Oferta.duracion_meses,
      	$scope.Oferta.fecha_caducidad,$scope.Oferta.cerrada)
        .then(function() {
        });
    };

 }])