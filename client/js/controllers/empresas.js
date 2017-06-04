angular
  .module('app')
  .controller('AllEmpresaController', ['$scope', 'Empresa', 
      function($scope, Empresa) {
      $scope.action="Empresa";
          $scope.Empresas = Empresa.find({
            });
       
}])
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
 .controller('MyEmpresaController', ['$scope', 'Empresa', 
      function($scope, Empresa) {
         $scope.$watch('currentUser.nombre', function(value) {
          if (!value) {
            return;
          }
      
      });
      
      
          $scope.Empresa = Empresa.findOne({
            filter: {
              where: {
                nombre: $scope.currentUser.nombre
              }
            },
              include: [
              "cif",
              "nombre",
              "direccion",
              "email",
              "localidad",
              "provincia",
              "telefono",
              "url",
              "fax",
              "n_empleados",
              "idsector",
              ]
            });
       
}])
 .controller('DeleteEmpresaController', ['$scope', 'Empresa', '$state',
      '$stateParams', function($scope, Empresa, $state, $stateParams) {
    Empresa
      .deleteById({ id: $stateParams.id })
      .$promise
      .then(function() {
        $state.go('empresas');
      });
  }])