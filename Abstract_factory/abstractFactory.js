class Empleado{
	constructor(nombre){
		this.nombre = nombre;
		this.say = function(){
			AlertaAF.add("Docente: " + nombre);

		};
	}
}

class EmpleadoFactory{
	constructor(){
		this.create = function(nombre){
			return new Empleado(nombre);
		};
	}
}

class Alumno{
	constructor(nombre){
		this.nombre = nombre;
		this.say = function(){
			AlertaAF.add("Alumno: " + nombre);

		};
	}
}

class AlumnoFactory{
	constructor(){
		this.create = function(nombre){
			return new Alumno(nombre);
		};
	}
}

var AlertaAF = (function(){
	var AlertaAF = "";

	return{
		add: function(msg){
			AlertaAF += msg + "\n";

		},
		show: function(){
			alert(AlertaAF);
			AlertaAF = "";
		}
	}
})();

function ejecutarPatron(){
	//declaramos variables
	var personaUES = new Array();
	var docenteFactory = new EmpleadoFactory();
	var alumnoFactory = new AlumnoFactory();

	personaUES.push(docenteFactory.create("Laura Romero Ortiz"));
	personaUES.push(docenteFactory.create("Erick lopez joya"));
	personaUES.push(alumnoFactory.create("Nelson Orlando Benavides"));
	personaUES.push(alumnoFactory.create("Nelson Orlans"));

	for(var i=0, len= personaUES.length; i < len; i++){
		personaUES[i].say();
	}

	AlertaAF.show();

}