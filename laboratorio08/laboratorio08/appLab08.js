// creamos el modulo e inyectamos el modulo de ruteo y luego lo configuramos
/**
PARA EL ALUMNO:
reemplaze el codigo en " **** incluir el modulo ngRoute****"
por el modulo de ruteo como se indica en el punto 4.

Luego defina un elemento "when" por cada vista (agenda - alta de tarea - lista de tareas)
Debera tener en cuenta los controladores definidos en controllers.js

*/
angular.module('appLab08', [ **** incluir el modulo ngRoute**** ]).config(
	function($routeProvider) {
	$routeProvider
		.when('/URL1-AGENDA', {
			controller : 'CONTROLADOR-URL1',
			templateUrl : 'templates/TEMPLATE_URL1.html'
		})
		// agregar todos los elementos when que necesite para que se pueda
		// tener una URL para cada una de las vistas en el directorio template
		.otherwise({
			  redirectTo: 'URL1-AGENDA'
		});
});
