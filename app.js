const http = require(`http`);

//best
const server = http.createServer((req, res) => {
  console.log(req);
  //   process.exit();
  res.setHeader(`Content-type`, `text/html`);
  res.write(`<html>`);
  res.write(`<head><title> My first Page </title></head>`);
  res.write(`<Body><h1>Hello from my node.js server </h1></Body>`);
  res.write(`</html>`);
  res.end();
});

// //worse
// http.createServer(function (req, res) {});
// //worst
// function rqListener(req, res) {}
// http.createServer(rqListener);

server.listen(9000, () => {
  console.log(`Hello, I am server`);
});
