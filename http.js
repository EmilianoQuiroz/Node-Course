//Modulo http
//http es un protocolo de trasferencia de archivos entre el cliente y el servidor
const http = require("http");

http
  .createServer((request, response) => {
    console.log(request.url);

    if (request.url === "/") {
      response.write("Welcome to the server");
      return response.end();
    }

    if (request.url === "/about") {
      response.write("acerca de");
      return response.end();
    }
    response.write("<h1>Not found</h1>");
    response.end();
  })
  .listen(3000);

console.log("servidor escuchando en el puerto 3000, actualizado");
