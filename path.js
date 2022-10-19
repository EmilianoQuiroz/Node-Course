const path = require('path')
//Sirve para unir varios directorios o rutas
const filePath = path.join('public', 'direct', 'styles', 'main.js')

//Devuelve el archivo principal
console.log(path.basename(filePath))

//Devuelve solo el directorio
console.log(path.dirname(filePath))

//Devuelve un objeto
console.log(path.parse(filePath))