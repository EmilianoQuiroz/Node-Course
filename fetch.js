
async function loadData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //Json placeholder nos provee de apis de prueba
    // .then(res => res.json())
    // .then(data => console.log(data))
    const data = await res.json()
    console.log(data)
}

loadData()