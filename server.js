const { Console } = require("console");
const http = require("http");
const fs = require('fs');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) =>{
    
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    case '/mango':
        path += 'mango.html';
        res.statusCode = 200;
        break;    
    default:
        path += 'index.html';
        res.statusCode = 404;
        break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.error(err);
            res.end();
        }else {
            res.end(data);
        }
    });
} );
server.listen(PORT, () => console.log('Server Listening on port ${PORT} '));