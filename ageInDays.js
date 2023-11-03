// 3. Age in Days

let person = {
    firstName:" Mithun",
    lastName: " s",
    age : 18,
}

function fullNameFun(names,callback){
let firstName = names.firstName   
let lastName =  names.lastName  

let fullName = firstName + lastName
let ageInDays = names.age 

callback(fullName, ageInDays)
}


function logResult(fullName , ageInDays){
        console.log( `The person's full name is : ${fullName}, And their age in days is: ${ageInDays * 365}` )
}


fullNameFun((person),logResult)