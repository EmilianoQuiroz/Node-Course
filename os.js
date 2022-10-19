const os = require('os')
//Informacion sobre el sistema operativo
console.log(os.userInfo())
//Informacion sobre el tiempo de actividad de la pc (hace cuanto esta encendida)
console.log(os.uptime())
//Ver en que sistema operativo se esta ejecutando Node
console.log(os.platform())
//Ver el total de memoria RAM que tiene el equipo
console.log(os.totalmem())
//ver el total de memoria RAM libre del sistema
console.log(os.freemem())
//Crear tablas e ingresar datos en ella

console.table({
    os: os.platform(),
    version: os.release(),
    totalmemory: os.totalmem() 
})