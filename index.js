const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!*! From Jenkins & Docker, DockerHub and of course Node.js for Pete Maan");
});

const port = process.env.PORT || 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
