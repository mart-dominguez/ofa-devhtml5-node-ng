angular.module("appLab11").factory("agendaServiceHttp",['$http',function($http){	
	var agendaService={};
	// cada vez que cargue el servicio se busca la agenda 1
	var agenda={};
	// si existe la agenda de ID 1 en la base de datos, entonces la recupero y la cargo
	// en la variale agenda
	$http.get("http://localhost:3000/agenda/1").success(
		function(data){
			// COMPLETAR ! ! ! ! 
		}
	).error(function(data,status){
		agenda = {propietario:undefined};
	});
	agendaService.definirPropietario = function(propietario){
		agenda.propietario = propietario;
		// COMPLETAR ENVIANDO EL POST AL API REST JSON con la agenda a crear! ! ! ! 
	}

	agendaService.getAgenda=function(){
		// COMPLETAR ENVIANDO EL GET  AL API REST JSON con la agenda a buscar ! ! ! ! 
	}

	agendaService.addTarea=function(unaTarea){
		// COMPLETAR interactuando con el  API REST JSON  ! ! ! ! 
	}

	agendaService.actualizarTarea=function(unaTareaModificada){
		// COMPLETAR interactuando con el  API REST JSON  ! ! ! ! 
	}

	agendaService.borrarTarea=function(unaTareaBorrar){
		// COMPLETAR interactuando con el  API REST JSON  ! ! ! ! 
	}

	agendaService.getTarea=function(id){
		var tarea;
		// COMPLETAR interactuando con el  API REST JSON  ! ! ! ! 
		return tarea;
	}
	return agendaService;
}]);
