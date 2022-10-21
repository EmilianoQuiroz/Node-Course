// console.log('Primero')
// //Esta funcion se ejecuta despues de x tiempo
// setTimeout(() =>{
//     console.log('Segundo')
// },3000)
// console.log('Tercero')

//Creacion de un servidor
const http = require('http')

const server =http.createServer((request, response) =>{
    if (request.url === '/'){
        response.write('Welcome to the server')
        return response.end()
    }
    if (request.url === '/about'){
        //Este bucle bloquea el hilo de ejecucion de node
        for(let i = 0; i < 100000; i++){
            console.log(Math.random() * i)
        }
        return response.end('about')
    }
    res.end('not found')
})

server.listen(3000)
console.log('Server on port 3000')