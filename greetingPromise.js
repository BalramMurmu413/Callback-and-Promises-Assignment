// 5. Greeting Promise


function greetMassage(inputName){
return new Promise((resolve =>{
    let logString = resolve(`Hellow ${inputName}!`.toUpperCase())
    resolve(logString)
} ))
    
}
    let myfrnd = "Superman"
    
    greetMassage(myfrnd).then((print =>console.log(print)))