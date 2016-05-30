function ejemploVar(){
	var x = "Primer var";
	if(true) {
		var x = 'Segundo var';
		console.log(x);
	}
	console.log(x);
}

function ejemploLet(){
	let x = "Primer let"
	if(true) {
		let x = 'Segundo let';
		let x = "Esto casca en el traspilador"
		console.log(x);
	}
	//Esto tiene que dar error.
	console.log(x);
}

export default function(){
	ejemploVar();
	ejemploLet();
};