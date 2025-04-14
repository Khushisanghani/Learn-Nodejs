const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.write("Welcome to Our Home Page");
        res.end();
    }
    if(req.url === "/contact"){
        res.setHeader("Content-Type","text/plain")
        res.write("Welcome to Our contact Page");
        res.end();
    }
})
const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
})