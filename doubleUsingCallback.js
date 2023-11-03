// Double Using Callback

function doubleArray(num, callback){
    let doubled = num *2;
    callback(doubled)
}
function numCallback(doubled){
    console.log(doubled)
}

let myNum = 10

doubleArray(myNum,numCallback)
