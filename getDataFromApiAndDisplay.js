async function ApiData(){
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await responce.text()
    console.log(data)
}
ApiData()
