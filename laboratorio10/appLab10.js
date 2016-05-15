// creamos el modulo e inyectamos el modulo de ruteo y luego lo configuramos
angular.module('appLab10', [ 'ngRoute' ]).config(
	function($routeProvider) {
	$routeProvider
		.when('/agenda', {
			controller : 'agendaController',
			templateUrl : 'templates/agenda.html'
		})
		.when('/tarea', {
			controller : 'tareasController',
			templateUrl : 'templates/altaTarea.html'
		})
		.when('/tarea/:id', {
			controller : 'tareasController',
			templateUrl : 'templates/altaTarea.html'
		})
		.when('/tareas', {
			controller : 'listarTareasController',
			templateUrl : 'templates/listaTareas.html'
		}).
		otherwise({
			  redirectTo: 'agenda'
		});
});
