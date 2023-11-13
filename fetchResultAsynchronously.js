async function getApi(){
    let responce = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data =  await responce.json()

    console.log(data)
}

getApi()
