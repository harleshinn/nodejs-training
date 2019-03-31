// Import global module http
const http = require('http');

// call method and pass anonymous function to process
// each request
const server = http.createServer((request, response) =>{
  //this function returns a server
  console.log(request.url, request.method, request.headers);

  response.setHeader('Content-Type', 'text/html');
  response.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1>Hello from my NodeJs Server!</h1>
  </body>
  </html>`);
  // After this method the response cannot be modified
  // since its already been sent to the client
  response.end();
});

/*
  Old syntax
  http.createServer(function(request, response){});
*/
// will keep our server listening to new events and will
// not stop our script inmediatly after it runs
server.listen(3000);