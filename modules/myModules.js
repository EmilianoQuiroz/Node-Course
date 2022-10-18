// console.log(module)
const MyWebAdress = "santiago.quiroz98@hotmail.com"
const myNumber = 1126608939
const myArray = [10, 20, 30]
const user = {
    name: 'Santiago',
    lastName: 'Quiroz'
}
// module.exports = {
//     MyWebAdress: MyWebAdress,
//     myNumber: myNumber,
//     myArray: myArray,
//     user: user
// }
// console.log(module)

//Importacion de modulos individuale

module.exports.user = user
module.exports.myNumber = myNumber
module.exports.myArray = myArray
module.exports.MyWebAdress = MyWebAdress