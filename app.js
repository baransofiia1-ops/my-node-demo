const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from AWS EC2 us-east-2 via GitHub Actions!\n');
});

server.listen(80, () => {
  console.log('Server is running on port 80');
});