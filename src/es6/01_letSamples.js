function ejemploVar(){
	if(true) {
		var x = 'Hola mundo';
	}
	console.log(x);
}

function ejemploLet(){
	if(true) {
		let x = 'Hola mundo';
	}
	//Esto tiene que dar error.
	console.log(x);
}

export default function(){
	ejemploVar();
	ejemploLet();
};