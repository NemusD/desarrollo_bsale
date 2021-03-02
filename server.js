const http = require('http');
const fs = require('fs');

const server = http.createServer(async(req,res)=>{
    if(req.url == '/' && req.method == 'GET'){
        fs.readFile('./assets/index.html',(err, file)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(file, 'utf-8')
            res.end()
        })
    }
});

server.listen(3000, ()=> console.log('escuchando 3000'))