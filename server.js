import { readFile } from "fs";
import http from "http";
import path from "path";

const app = {};
const __metUrl = import.meta.url;

app.dirname = path.dirname(__metUrl);

app.createServer = () => {
  const server = http.createServer((req, res) => {
    const contentType = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
    };

    let filePatch = req.url;

    if (filePatch === '/') {
        filePatch = "/index.html";
    }

    


    const extname = path.extname(filePatch);
    // console.log(filePatch)
    const contentTypeValue = contentType[extname] || "application/octet-stream";

    readFile("./" + filePatch, (err, file) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      } else {
        res.writeHead(200, { "Content-Type": contentTypeValue });
        res.end(file, "utf-8");
      }
    });
  });
  server.listen(800, () => {
    console.log("server start...");
  });
};

app.createServer();
