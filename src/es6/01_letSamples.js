function ejemploVar(){
	var x = "Primer var";
	if(true) {
		var x = 'Segundo var';
		console.log(x);
	}
	console.log(x);
}

function ejemploLet(){
	for(let i=0; i<5; i++){
		console.log("Soy let con valor", i);
	}
	//console.log(i);
}

export default function(){
	ejemploVar();
	ejemploLet();
};