
// creamos todos los controladores para cada una de las paginas
angular.module("appLab09")
	.controller("agendaController",['$scope','agendaService','$location',
			function($scope,agendaService,$location){
				$scope.agenda=agendaService.getAgenda();
				$scope.titulo ="Gestion de tareas";				
				$scope.crearPropietario=function(){
					agendaService.definirPropietario($scope.nombrePropietario);
					$location.path('/tarea');
				}
	}])
	.controller("listarTareasController",['$scope','agendaService',
			function($scope,agendaService){
				$scope.titulo ="Lista de tareas programadas";				
	}])
	.controller("tareasController",['$scope','agendaService',
			function($scope,agendaService){
				$scope.titulo ="Datos de una tarea";				
				$scope.unaTarea = {};
				$scope.agregarTarea = function(){
     				$scope.agenda.tareas.push($scope.unaTarea);
    				 // limpiar la tarea agregada.
    				 $scope.unaTarea = {};
				}
}]);