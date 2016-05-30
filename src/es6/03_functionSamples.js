function defaultParametersES6(url, timeout = 2000, callback = function(){}){
	console.log(`URL ${url}, TIMEOUT: ${timeout}, CALLBACK: ${callback}`);
}


export default function(){
	defaultParametersES6();
	
	defaultParametersES6("/url");
	defaultParametersES6("/url", 5000);
	defaultParametersES6("/url", 1000, function(){console.log("Porque yo lo valgo")});

};