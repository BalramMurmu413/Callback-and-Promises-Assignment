function showData(){
    try{
       async function myApi(){
            let responce =  await fetch ("https://jsonplaceholder.typicode.com/posts")
            const data = await responce.json()
            console.log(data)
            console.log("Data Handled")
        }
myApi()         
    }
    catch{
        console.log("i am catch")
    }
}

showData()
