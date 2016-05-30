function ejemploVar(){
	var x = "Primer var";
	if(true) {
		var x = 'Segundo var';
		console.log(x);
	}
	console.log(x);
}

function ejemploLet(){
	if(true) {
		console.log(x); //Esto casca por undefined en consola de navegador
		let x = 'Segundo let';
	}
}

export default function(){
	ejemploVar();
	ejemploLet();
};