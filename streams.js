// const {writeFile} = require('fs/promises');



// const createBigfile = async()=> {
//     await writeFile('./data/bigfile.txt', 'Nuevo archivo');
// }

// createBigfile();

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile.txt')

stream.on('data',(chunk) =>{
    console.log(chunk)
})
//Cuando tenemos un archivo grande el servidor no necesariamente tiene que leer todo, puede fragmentarlo e ir leyendolo por partes
