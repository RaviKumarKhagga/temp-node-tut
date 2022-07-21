// import the Node.js http module 
// var http = require('http');

// // req is the request object which is coming from the slient side
// // res is the response object which is going to client as response from server

// // create a server object 
// http.createServer(function (req, res){
//     // 200 is the status code which means ALL OK 
//     // and second argument is the object of response header

//     res.writeHead(200, {'Content-Type' : 'text/html'});

//     // write a response to client

//     res.write('Congrates you have created a web server');

//     //ends the response
//     res.end();
// }).listen(8081); // server object listens on port 8081

// console.log('Node.js web server at port 8081 is running...');

/******************************************************************************************/

/*HTTP module*/

// import Node.js core module i.e. http
var http = require('http');

//create a server
var server = http.createServer(function (req, res){

    // check the URL of the current request
    if(req.url == '/'){

        // set response header
        res.writeHead(200, {'Content-Type' : 'text/html'});

        // set response content
        res.write(
            `
            <html><body style="text-align:center;">
            <h1 style="color:green;">GeeksforKGeeks Home Page</h1>
            <p> A computer science portal</p>
            </body></html>`);
            res.end(); // end the response
    }

    else if(req.url == "/webtech"){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(
            `
            <html><body style="text-align:center;">
            <h1 style="color:green;">Welcome to GeeksforGeeks</h1>
            <a href="https://www.geeksforgeeks.org/web-technology/">
            Read Web Technology content
            </a>
            </body></html>`);
            res.end(); // end the response
    }

    else if(req.url == "/DS"){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(
            `
            <html><body style="text-align:center;">
            <h1 style="color:green;">GeeksforGeeks</h1>
            <a href="https://www.geeksforgeeks.org/data-structures/">
            Read Data Structures Content
            </a>
            </body></html>`);
            res.end(); // end the response
    }

    else if(req.url == "/algo"){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(
            `
            <html><body style="text-align:center;">
            <h1 style="color:green;">GeeksforGeeks</h1>
            <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
            Read Alogorithm analysis and Design Content
            </a>
            </body></html>`);
            res.end(); // end the response
    }

    else{
        res.end('Invalid Request!!..') // end the response
    }

    //server object listens on port 8081
}).listen(2000, () => console.log('Server running on port 2000'));