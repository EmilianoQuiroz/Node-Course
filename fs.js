//File System
const fs = require("fs");

// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt')

// console.log(first)
// console.log(second.toString())

// fs.writeFileSync('./data/tercero.txt', 'Este es un tercer archivo')

// const tercero = fs.readFileSync('./data/tercero.txt')
// console.log(tercero.toString())

//Codigo asincrono

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data.toString());
    fs.readFile("./data/second.txt", "utf-8", (error, data) => {
      if (error) {
        console.log(err);
      }
      console.log(data);
    });
  });
});
