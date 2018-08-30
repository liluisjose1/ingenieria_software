

class Triangulo{
	constructor(base,altura){
		this.base = base;
		this.altura = altura;
	}

	get Area(){
		return this.CalcularArea();
	}
	CalcularArea(){
		return (this.base * this.altura)/2;
	}
}

const trianguloX = new Triangulo(2,5);

console.log(trianguloX.Area);