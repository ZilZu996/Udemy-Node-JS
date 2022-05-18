const http = require(`http`);
const fs = require(`fs`);

//best
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === `/`) {
    res.setHeader(`Content-type`, `text/html`);
    res.write(`<html>`);
    res.write(`<head><title> Enter Message </title></head>`);
    res.write(
      `<Body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></Body>`
    );
    res.write(`</html>`);
    return res.end();
  }
  if (url === `/message` && method === `POST`) {
    const body = [];
    req.on(`data`, (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on(`end`, () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split(`=`)[1];
      fs.writeFileSync(`message.txt`, message);
    });

    res.statusCode = 302;
    res.setHeader(`Location`, `/`);
    return res.end();
  }
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
