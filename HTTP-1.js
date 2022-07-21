const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.write('Welcome to our home page')
        res.end()
    }
     else if(req.url == '/about'){
        res.write('Here is our short history')
        res.end()
    }
    else {
        res.end('Invalid request');
    }
})
server.listen(5000)