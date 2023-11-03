function typ(){

    try{
        function myApi(){
            let data = fetch ("https://jsonplaceholder.typicode.com/posts")
            console.log(data)
            console.log("try block")
        }
        
    }
    catch{
        console.log("i am catch")
    }
}


console.log(typ)

console.log("hellwo")

