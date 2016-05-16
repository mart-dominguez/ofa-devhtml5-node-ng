angular.module("appLab12").factory("agendaServiceHttp",['$http','$q',function($http,$q){	
	var agendaService={};
	// cada vez que cargue el servicio se busca la agenda 1
	var agenda={propietario:undefined};
	
	agendaService.getAgenda=function(id){
		var asyn = $q.defer();
		$http.get("http://localhost:3000/agenda/"+id).success(function(data){
			// traigo la agenda actualizada
			asyn.resolve(data);			
		}).error(function(data){
			asyn.resolve(agenda);
		});
		return asyn.promise;
	}

	agendaService.definirPropietario = function(propietario){
		var asyn = $q.defer();

		agenda.propietario = propietario;
		$http.post("http://localhost:3000/agenda/",agenda).success(function(data){
			// traigo la agenda actualizada
			agenda = data;			
			asyn.resolve();
		});
		return asyn.promise;
	}

	agendaService.getTarea=function(id){
		$http.get("http://localhost:3000/tareas/"+id).success(function(data){
		});
	}

	agendaService.addTarea=function(unaTarea){
		$http.post("http://localhost:3000/tareas/",unaTarea).success(function(data){
			// actualizo ahora toda la lista de tareas
		});
	}

	agendaService.actualizarTarea=function(unaTareaModificada){
		$http.post("http://localhost:3000/tareas/"+unaTareaModificada.id,unaTareaModificada).success(function(data){
			// actualizo ahora toda la lista de tareas
		});
	}

	agendaService.borrarTarea=function(unaTareaBorrar){
		$http.delete("http://localhost:3000/tareas/"+unaTareaBorrar.id).success(function(data){
			// borrar la agenda actualizada
		});
	}

	return agendaService;
}]);
