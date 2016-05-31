function promesa1(prop1, prop2, delay = 1500){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(`p1: ${prop1} ${prop2}`),delay);
    });
}

function promesa2(prop1, prop2, delay = 2000){
    return new Promise((resolve, reject)=>{
        let fecha = new Date();
        setTimeout(()=>reject(`p2: ${fecha.toISOString()}; ${prop1} ${prop2}`),delay);
    });
}

function ejemploPromesaSuccess(){
    promesa1("hola", "mundo").then((response)=>console.log("Promesa resuelta", response));
}

function ejemploPromesaFail(){
    promesa2("Adios", "mundo").then((response)=>console.log("Promesa resuelta", response)).catch((error)=>console.log("Promesa erronea", error));
}

function ejemploPromesaAllSuccess(){
    const success = (response) => console.log("Todas las llamadas resueltas", response);
    const fail = (error) => console.error("Ha habido un pete en las llamadas a las promesas", error);
    const args = ["hola", "mundo"];
    
//    Promise.all([
//        promesa1(...args), 
//        promesa1(...args, 2500)
//    ]).then(success).catch(fail);
//
//    Promise.all([
//        promesa1(...args), 
//        promesa2(...args, 2500)
//    ]).then(success).catch(fail);
//
//    
//    Promise.all([
//        promesa1(...args), 
//        promesa1(...args, 2500)
//    ]).then(success, fail);
//
//    Promise.all([
//        promesa1(...args), 
//        promesa2(...args, 2500)
//    ]).then(success, fail);

//    Promise.race([
//        promesa1(...args, 1500), 
//        promesa2(...args, 2500)
//    ]).then(success).catch(fail);
    
    const promesas = [
        promesa1(...args, 3000).then((response)=>console.log("1 Response: ", response)).catch((error)=>console.error("1 Error: ", error)),
        promesa2(...args, 1000).then((response)=>console.log("2 Response: ", response)).catch((error)=>console.error("2 Error: ", error)),
        promesa1(...args).then((response)=>console.log("3 Response: ", response)).catch((error)=>console.error("3 Error: ", error)),
    ];

    Promise.all(promesas).then(()=>console.log("Todo ha acabado")).catch(()=>console.log("Algo ha ido mal"));
}

export default function(){
//    ejemploPromesaSuccess();
//    ejemploPromesaFail();
    ejemploPromesaAllSuccess();
};