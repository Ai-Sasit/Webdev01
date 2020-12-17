const http = require('http');

http.createServer((req, res) => {
  console.log("request: detected!");
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("Wow Browser!")
  res.end();
}).listen(80)