const fs =require("fs")

// fs.readFile("docss.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

fs.writeFile("docss.txt","hello world",()=>{

})


var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
  console.log(res);
}).listen(8080);