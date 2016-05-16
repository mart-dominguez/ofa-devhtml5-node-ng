
// creamos todos los controladores para cada una de las paginas
angular.module("appLab12")
	.controller("agendaController",['$scope','agendaServiceHttp','$location',
			function($scope,agendaService,$location){
				agendaService.getAgenda(1).then(
					function(data){
						$scope.agenda= data;
					});
				$scope.titulo ="Gestion de tareas";				
				$scope.crearPropietario=function(){
					agendaService.definirPropietario($scope.nombrePropietario).then(
						function(){
							$location.path('/tarea');
						})
				}
	}])
	.controller("listarTareasController",['$scope','$location','agendaServiceHttp',
			function($scope,$location,agendaService){
				$scope.titulo ="Lista de tareas programadas";		
				$scope.tareas = agendaService.getAgenda().tareas;	
				$scope.seleccionar = function(tarea){
					$location.path('/tarea/'+tarea.id);
				}
	}])
	.controller("tareasController",['$scope','$location','$routeParams','agendaServiceHttp',
			function($scope,$location,$routeParams,agendaService){
				agendaService.getAgenda().then(
					function(data){
						$scope.titulo ="Datos de una tarea para la agenda de "+data.propietario;
					});
				$scope.unaTarea = {};				

				if(!($routeParams.id===undefined)){
					agendaService.getTarea($routeParams.id).then(
						function(data){
							$scope.unaTarea =data;
						});
				}
				$scope.agregarTarea = function(){
					// guardar la tarea en el servicio
    				// limpiar la tarea agregada seteandola a un objeto vacio.
    				// redirigir a la vista de la lista de tareas
				}

				$scope.actualizarTarea = function(){
					// actualizar la tarea en el servicio
    				// limpiar la tarea agregada seteandola a un objeto vacio.
    				// redirigir a la vista de la lista de tareas
				}
				$scope.borrarTarea = function(){
					// borrar la tarea en el servicio
    				// limpiar la tarea agregada seteandola a un objeto vacio.
    				// redirigir a la vista de la lista de tareas
				}
				$scope.cancelar = function(){
    				// limpiar la tarea agregada seteandola a un objeto vacio.
    				// redirigir a la vista de la lista de tareas
				}
}]);