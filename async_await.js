// Async y await
/** Async sirve para que podamos especificar que dentro de una funcion hay codigo asincrono */
/** Await sirve para determinar el tiempo que le va a tomas a la funcion asincrona ejecutarse */

const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

async function read() {
  try {
    /** En try ponemos el codigo que si o si queremos que se ejecute */
    const result = await getText("./data/first.txt");
    const result2 = await getText("./data/second.txt");
    console.log(result);
    console.log(result2);
  } catch  (error) {
    /** Si ocurre un error paso a mostrar el codigo dentro del catch*/
    console.log(error)
  }
}
read();
