angular
  .module('app')
  
 .controller('CreateEmpresaController', ['$scope', 'EmpreService', '$state',function($scope,
      EmpreService,$state) {

 	$scope.Empresa={
        cif:'',
        nombre:'',
        direccion:'',
        email:'',
        provincia:'',
        localidad:'',
        telefono:'',
        url:'',
        fax:'',
        n_empleados:'',
        idsector:''
      }

     $scope.create = function() {
      EmpreService.create($scope.Empresa.cif,$scope.Empresa.nombre,$scope.Empresa.direccion,$scope.Empresa.email,
        $scope.Empresa.provincia,$scope.Empresa.localidad,$scope.Empresa.telefono,$scope.Empresa.url,$scope.Empresa.fax,
        $scope.Empresa.n_empleados,$scope.Empresa.idsector)
        .then(function() {
        });
    };

 }])