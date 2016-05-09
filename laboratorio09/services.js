angular.module("appLab09").factory("agendaService",function(){
	var agendaService={};
	var agenda={propietario:undefined,tareas:[]};
	agendaService.definirPropietario = function(propietario){
		agenda.propietario=propietario;
	}
	agendaService.getAgenda=function(){
		return agenda;
	}
	agendaService.addTarea(unaTarea){
		//
	}
	return agendaService;
});
