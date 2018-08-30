/*
introduccion a clases
*/



class Docente{
	constructor(name){
		this.name = name;
	}

	mostrarNombre(){
		console.log(this.name + "Docente UES-FMO");
	}
}

var mostrarDocente = new Docente('Ing. Milagro Alicia de Reyes ');
mostrarDocente.mostrarNombre();