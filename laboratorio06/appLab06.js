// creamos el modulo
angular.module("appLab06",[]);
//lo referenciamos al modulo para agregar un controlador
angular.module("appLab06")
	.controller("tareasController",
			function($scope){
				$scope.agenda={propietario:undefined,tareas:[]};
				$scope.titulo ="Gestion de tareas";				
				$scope.crearPropietario=function(){
					this.agenda.propietario = $scope.nombrePropietario;
				}
});