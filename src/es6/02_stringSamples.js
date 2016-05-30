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


export default function(){
	ejemploString();
};