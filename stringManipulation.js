// String Manipulation

function manipulateString(inputString, callback){

    const manipulatedString = inputString.toUpperCase();

    callback(manipulatedString);
}

function logString(manipulatedString){
    console.log(`manipulated string is : ${manipulatedString}`)
}


let names = "John Cena"

console.log(manipulateString(names,logString))