const http = require('http')
const url = require('url')
const petshop = require('./petshop')
http.createServer((req,res)=>{
    if(req.url == "/home"){
        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
        res.write('Você está na home')
        res.end
    }if(req.url == "/home/add"){
        petshop.cadastrar('bob')
        
    }}).listen(3000, 'localhost')
