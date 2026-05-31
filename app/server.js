const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Cloudsystemen Project</title>
      </head>
      <body>
        <h1>Hello from Docker + Traefik</h1>
	<p>This is V1.0, running on Google Cloud services</p>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
