// creamos el modulo e inyectamos el modulo de ruteo y luego lo configuramos
angular.module('appLab08', [ 'ngRoute' ]).config(
	function($routeProvider) {
	$routeProvider
		.when('/URL1', {
			controller : 'agendaController',
			templateUrl : 'templates/agenda.html'
		})
		.when('/URL2', {
			controller : 'tareasController',
			templateUrl : 'templates/altaTarea.html'
		})
		.when('/URL3', {
			controller : 'listarTareasController',
			templateUrl : 'templates/listaTareas.html'
		}).
		otherwise({
			  redirectTo: 'URL1'
		});
});
