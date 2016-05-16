angular.module("appLab11").factory("agendaServiceHttp",['$http',function($http){	
	var agendaService={};
	// cada vez que cargue el servicio se busca la agenda 1
	var agenda={};
	$http.get("http://localhost:3000/agenda/1").success(
		function(data){
			agenda = data;
		}
	).error(function(data,status){
		agenda = {propietario:undefined};
	});
	agendaService.definirPropietario = function(propietario){
		agenda.propietario = propietario;
		$http.post("http://localhost:3000/agenda/",agenda).success(function(data){
			// traigo la agenda actualizada
			agenda = data;			
		});
	}

	agendaService.getAgenda=function(){
		$http.get("http://localhost:3000/agenda/1").success(function(data){
			// traigo la agenda actualizada
			agenda = data;			
		});
	}

	agendaService.addTarea=function(unaTarea){
		$http.post("http://localhost:3000/tareas/",unaTarea).success(function(data){
			// actualizo ahora toda la lista de tareas
			console.log("actualizo");
			console.log(data);
		});
	}

	agendaService.actualizarTarea=function(unaTareaModificada){
		$http.post("http://localhost:3000/tareas/"+unaTareaModificada.id,unaTareaModificada).success(function(data){
			// actualizo ahora toda la lista de tareas
			console.log("actualizo");
			console.log(data);
		});
	}

	agendaService.borrarTarea=function(unaTareaBorrar){
		$http.delete("http://localhost:3000/tareas/"+unaTareaBorrar.id).success(function(data){
			// traigo la agenda actualizada
			console.log("borro");
			console.log(data);
		});
	}

	agendaService.getTarea=function(id){
		var tarea;
		$http.post("http://localhost:3000/tareas/"+id,agenda).success(function(data){
			// traigo la agenda actualizada
			tarea = data;			
		});
		return tarea;
	}
	return agendaService;
}]);
