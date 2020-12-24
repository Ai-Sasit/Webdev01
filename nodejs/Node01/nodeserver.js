const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  console.log("request: detected!");
  console.warn(req.headers[`user-agent`]);
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write("Wow Browser!");
  res.write(`<p>${req}</p>`);

  let query = url.parse(req.url, true).query;
  let text = query.name + " " + query.old;
  console.log(`${JSON.stringify(query)}`);

  res.end(`<h3>${text}</h3>`);
}).listen(80)