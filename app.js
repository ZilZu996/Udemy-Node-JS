const http = require(`http`);

//best
const server = http.createServer((req, res) => {
  console.log(req);
});

// //worse
// http.createServer(function (req, res) {});
// //worst
// function rqListener(req, res) {}
// http.createServer(rqListener);

server.listen(9000, () => {
  console.log(`Hello, I am server`);
});
