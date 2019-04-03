// Import global module http
const http = require('http');
const fs = require('fs');

// call method and pass anonymous function to process
// each request
const server = http.createServer((request, response) =>{
  const url = request.url;
  const method = request.method;

  if (url === '/') {
    response.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Enter Message</title>
    </head>
    <body>
      <h1>Please, leave a message</h1>
      <form action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">Send</button>
      </form>
    </body>
    </html>`);
    return response.end();
  };

  if (url === '/message' && method === 'POST') {
    const body = [];

    request.on('data', (chunk) => {
      // I can modify de const but not re assing it
      console.log(chunk);
      body.push();
    });

    request.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });

    fs.writeFileSync('message.txt', 'DUMMY');
    response.statusCode = 302;
    response.setHeader('Location', '/');

    return response.end();
  }

  response.setHeader('Content-Type', 'text/html');
  response.write(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
  </head>
  <body>
    <h1>Hello from my NodeJs Server!</h1>
  </body>
  </html>`);
  // After this method the response cannotcl be modified
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