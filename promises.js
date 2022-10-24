/** Promesas en JavaScritp */
const { readFile } = require("fs/promises");
//const { promisify } = require("util");

//const readFilePromise = promisify(readFile);

// const getText = (pathFile) => {
//   return new Promise(function (resolve, reject) {
//     readFile(pathFile, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// };

// getText("./data/first.txt")
//     .then((result) => console.log(result))
//     .catch(error => console.log(result))

/** Como crear promesas de una manera mas sencilla con promisify (modulo de node) */

async function read() {
  try {
    /** En try ponemos el codigo que si o si queremos que se ejecute */
    const result = await readFile("./data/first.txt", "utf-8");
    const result2 = await readFile("./data/second.txt", "utf-8");
    console.log(result);
    console.log(result2);
  } catch (error) {
    /** Si ocurre un error paso a mostrar el codigo dentro del catch*/
    console.log(error);
  }
}
read();
