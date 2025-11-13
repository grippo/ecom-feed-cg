const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;
const feedPath = path.join(__dirname, 'feed.json');
const feed = JSON.parse(fs.readFileSync(feedPath, 'utf8'));
http.createServer((req, res) => {
if (req.url.startsWith('/feed/products.json')) {
res.writeHead(200, {
'Content-Type': 'application/product+json',
'Link': '<http://localhost:3000/feed/products.json?page=2>; rel="next"'
});
res.end(JSON.stringify(feed, null, 2));
} else {
res.writeHead(404);
res.end('Not Found');
}
}).listen(PORT);
console.log(Demo server: http://localhost:${PORT}/feed/products.json);
