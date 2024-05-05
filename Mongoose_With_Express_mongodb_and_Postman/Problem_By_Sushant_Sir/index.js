const fs= require('fs');
const http= require('http');
const url= require('url');
///////////////////////////////
//SERVER
const server= http.createServer((req,res)=>{
    console.log(req.url);

    if (pathName === '/' || pathName === '/overview'){
        res.end('this is the OVERVIEW');
    } else if (pathName === '/product'){
        res.end('this is the PRODUCT');
     } else if (pathName === '/api'){

        fs.readFile('./dev-data/data/json' , 'utf-8' , (err,data)=>{
           const productdata = JSON.parse(data);
           console.log(productdata);
        })

        res.end('API');
     } else {
        res.writeHead(404, {
            'content-type' : 'text/html',
            'my-own-header' : 'hello-world'
        });
        res.end('<h1> page not found! </h1>');
     }

});


server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to request on port: 8000');
})