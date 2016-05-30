//stringSamples
function ejemploString(){
	var msg = "Hello world!";
	
	console.log(msg.startsWith("Hello"));
	console.log(msg.endsWith("!"));
	console.log(msg.includes("o"));
	
	console.log(msg.startsWith("o"));
	console.log(msg.endsWith("world!"));
	console.log(msg.includes("x"));
	
	console.log(msg.startsWith("o", 4));
	console.log(msg.endsWith("o", 8));
	console.log(msg.includes("o", 8))
}
function ejemploString2(){
	const persona = {
		nombre: "Jason",
		apellido: "Harris"
	};
	
	console.log(`Hola ${persona.nombre} ${persona.apellido}`);
}

export default function(){
	ejemploString();
	ejemploString2();
};