
// creamos todos los controladores para cada una de las paginas
angular.module("appLab08")
	.controller("agendaController",
			function($scope){
				$scope.agenda={propietario:undefined,tareas:[]};
				$scope.titulo ="Gestion de tareas";				
				$scope.crearPropietario=function(){
					this.agenda.propietario = $scope.nombrePropietario;
				}
}).controller("listarTareasController",
			function($scope){
				$scope.titulo ="Lista de tareas programadas";				
}).controller("tareasController",
			function($scope){
				$scope.titulo ="Datos de una tarea";				
				$scope.unaTarea = {};
				$scope.agenda={propietario:undefined,tareas:[]};
				$scope.agregarTarea = function(){
					console.log("tarea agregada");
					console.log($scope.unaTarea);
     				$scope.agenda.tareas.push($scope.unaTarea);
    				 // limpiar la tarea agregada.
    				 $scope.unaTarea = {};
				}
});