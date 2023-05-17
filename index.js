const http = require('http');
const Info = process.env.SECRET2;
const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!*! From Jenkins & Docker, DockerHub :: Username=" + process.env.SECRET1 + " Password=" + process.env.SECRET2);
});

const port = process.env.PORT || 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
console.log("Secret1 is %s", process.env.SECRET1);
