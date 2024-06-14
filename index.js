let http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    console.log("Listening...");
    console.log(req.url);
    res.setHeader("Content-Type", "text/html");
    let path = "./views/";

    switch (req.url) {
      case "/":
        path += "index.html";
        res.statusCode = 200;
        break;
      case "/about":
        path += "about.html";
        res.statusCode = 200;
        break;
      case "/contact-me":
        path += "contact-me.html";
        res.statusCode = 200;
        break;
      default:
        path += "404.html";
        res.statusCode = 404;
        break;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.end(data);
      }
    });
  })
  .listen(8080);
