export function suma(x,y){
    return x + y
}
export function resta(x,y){
    return x - y
}
function mult(x,y){
    return x * y
}
function div(x,y){
    return x / y
}
// console.log(suma(10,20))
// console.log(resta(20,10))
// console.log(mult(10,20))
// console.log(div(20,10))

//Exportacion de modulos

export default {
    suma,
    resta,
    mult,
    div
}