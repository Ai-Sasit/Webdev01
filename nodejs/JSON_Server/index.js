const http = require('http');

http.createServer((req, res) => {
  console.log("request: detected!");
  console.warn(req.headers[`user-agent`]);
  res.writeHead(200,{"Content-Type":"application/json"});
  res.write(`${JSON.stringify(req.headers)}`);

  res.end();
}).listen(80)