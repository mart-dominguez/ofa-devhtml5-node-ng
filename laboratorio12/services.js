angular.module("appLab12").factory("agendaService",function(){
	var _ID=0;
	var agendaService={};
	var agenda={propietario:undefined,tareas:[]};
	agendaService.definirPropietario = function(propietario){
		agenda.propietario=propietario;
	}
	agendaService.getAgenda=function(){
		return agenda;
	}	
	agendaService.addTarea=function(unaTarea){
		unaTarea.id = ++_ID;
		agenda.tareas.push(unaTarea);
	}
	agendaService.actualizarTarea=function(unaTareaModificada){
		var indiceTarea= agenda.tareas.findIndex(function(elemento){
			return elemento.id ==unaTareaModificada.id;
		});
		console.log(unaTareaModificada);
		console.log(indiceTarea);
		console.log(agenda.tareas);
		agenda.tareas.splice(indiceTarea,1,unaTareaModificada)
	}
	agendaService.borrarTarea=function(unaTareaBorrar){
		var indiceTarea= agenda.tareas.find(function(elemento){
			return elemento.id ==unaTareaBorrar.id;
		});
		agenda.tareas.splice(indiceTarea,1)
	}
	agendaService.getTarea=function(id){
		return agenda.tareas.find(function(elemento){
			return elemento.id ==id;
		});
	}
	return agendaService;
});
