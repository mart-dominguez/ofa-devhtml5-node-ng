function Tarea (id,titulo,desc,prioridad,cat,correo,duracion,fecha) {
	this.id=id;
    this.titulo = titulo;
    this.fecha = fecha;
    this.descripcion = desc;
    this.prioridad = prioridad;
    this.categoria=cat;
    this.correo = correo;
    this.duracion=duracion;
}


function Agenda (propietario) {
    this.propietario = propietario;
    this.tareas = [];
    this.tareaSeleccionada = [];
}

Agenda.prototype.addTarea = function(t) {
	this.tareas.push(t);
	console.log(t);
};

Agenda.prototype.updateTarea = function(t) {
	var indice = this.tareas.findIndex(function(e){
		return t.id = e.id;
	})
	console.log(indice);
	console.log(t);
	this.tareas.splice(indice,1,t);
	console.log(t);
};

Agenda.prototype.deleteTarea = function(t) {
	var indice = this.tareas.findIndex(function(e){
		return t.id = e.id;
	})
	this.tareas.splice(indice,1);
	console.log(t);
};
Agenda.prototype.seleccionarTarea = function(id) {
	this.tareaSeleccionada = this.tareas.find(function(elemento){
		return elemento.id == id;
	});
};

Agenda.prototype.getTareaSeleccionada = function() {
		return this.tareaSeleccionada;
};
//definicion de una variable global para almacenar una agenda.
var globalAgenda;
var idTarea=0;

function iniciar(){
	var seccionCreacionAgenda = document.getElementById("creacionAgenda");
	var duenioAgenda= document.getElementById("duenioAgenda");
	var btnCrearAgenda= document.getElementById("btnCrearAgenda");

	var seccionDatoAgenda  = document.getElementById("datoAgenda");
	var nombreDuenioAgenda = document.getElementById("nombreDuenioAgenda");

	var bloqueGestionTareas= document.getElementById("bloqueGestionTareas");

	var listaTareas =document.getElementById("listaTareas");
	var btnAddTarea = document.getElementById("btnAddTarea");
	var btnUpdTarea = document.getElementById("btnUpdTarea");	
	var btnDelTarea = document.getElementById("btnDelTarea");

	var inputTareaTitulo = document.getElementById("titulo");
	var inputTareaDescripcion = document.getElementById("descripcion");
	var inputTareaFecha = document.getElementById("fecha");
	var inputTareaDuracion = document.getElementById("duracion");
	var inputTareaPrioridad = document.querySelector('input[name="prioridad"]:checked').value;
	var inputTareaCategoria = document.getElementById("categoria");
	var inputTareaMail = document.getElementById("mail");



	seccionDatoAgenda.style.display="none";
	bloqueGestionTareas.style.display="none";
	seccionCreacionAgenda.style.display="";
	btnDelTarea.style.display="none";
	btnUpdTarea.style.display="none";
	
	//cuando hace click en el boton crear agenda se crea la agenda del duenio en la variable global
	btnCrearAgenda.addEventListener('click',function(){
		globalAgenda = new Agenda(duenioAgenda.value);
		seccionDatoAgenda.style.display="";
		bloqueGestionTareas.style.display="";
		seccionCreacionAgenda.style.display="none";
		nombreDuenioAgenda.innerHTML=duenioAgenda.value;
	});


	btnAddTarea.addEventListener('click',function(){
		var t = new Tarea(++idTarea,inputTareaTitulo.value,inputTareaDescripcion.value,inputTareaPrioridad,
			inputTareaCategoria.value,inputTareaMail.value,
			inputTareaDuracion.value,inputTareaFecha.value);
		globalAgenda.addTarea(t);
		var li = document.createElement("li");
  		var enlaceEditar = document.createElement("a");
		enlaceEditar.setAttribute('href', "#");
		enlaceEditar.setAttribute('data-idTarea', t.id);
  		enlaceEditar.onclick = function(){
  			globalAgenda.seleccionarTarea(this.getAttribute("data-idTarea"));

	 		inputTareaTitulo.value =globalAgenda.getTareaSeleccionada().titulo;
		 	inputTareaDescripcion.value = globalAgenda.getTareaSeleccionada().descripcion;
			inputTareaFecha.value = globalAgenda.getTareaSeleccionada().fecha;
			inputTareaDuracion.value =  globalAgenda.getTareaSeleccionada().duracion;
			inputTareaCategoria.value = globalAgenda.getTareaSeleccionada().categoria;
			inputTareaMail.value = globalAgenda.getTareaSeleccionada().correo;
			btnAddTarea.style.display="none";
			btnDelTarea.style.display="";
			btnUpdTarea.style.display="";
  		};
		enlaceEditar.appendChild(document.createTextNode(t.titulo+" - "+t.fecha+" - "+t.prioridad+" - "+t.categoria+" - "+t.correo));
  		li.appendChild(enlaceEditar);
  		listaTareas.appendChild(li);
  		inputTareaTitulo.value='';
		inputTareaFecha.value='';
		inputTareaMail.value='';
		inputTareaDescripcion.value='';
  	});

  	btnUpdTarea.addEventListener('click',function(){
		globalAgenda.getTareaSeleccionada().titulo =inputTareaTitulo.value;
		globalAgenda.getTareaSeleccionada().descripcion =inputTareaDescripcion.value;
		globalAgenda.getTareaSeleccionada().prioridad = inputTareaPrioridad;
		globalAgenda.getTareaSeleccionada().categoria =inputTareaCategoria.value;
		globalAgenda.getTareaSeleccionada().correo = inputTareaMail.value;
		globalAgenda.getTareaSeleccionada().duracion= inputTareaDuracion.value;
		globalAgenda.getTareaSeleccionada().fecha= inputTareaFecha.value;
		globalAgenda.updateTarea(globalAgenda.getTareaSeleccionada());
		// reacomodar la lista
		console.log(globalAgenda.tareas);
	});

	btnDelTarea.addEventListener('click',function(){
		globalAgenda.deleteTarea(globalAgenda.getTareaSeleccionada());
		console.log(globalAgenda.tareas);
	});
}