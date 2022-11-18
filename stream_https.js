const http = require('http')
const {createRedSteam} = require('fs')

const server = http.createServer((req, res) => {
    const fileStream = createRedSteam('./data/bigfile.txt',{
        encoding: 'utf-8'
    })
    fileStream.on('data',(chunk)=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',error =>{
        console.log(error)
    })
})
server.listen(3000)
console.log('server on port ' + 3000)