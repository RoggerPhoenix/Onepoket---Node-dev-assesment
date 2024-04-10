// Basic Node.js Server

const restify = require('restify');
const port=3000;
const server = restify.createServer();

server.get('/', function (req, res, next) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('Hello World');

})

server.listen(port, function(error){
    if(error){
        console.log("Error: Connection Failed: "+error);
    }
    else{
        console.log("server is listening on port: "+port);
    }
})
