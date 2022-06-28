/*

Section 1.1: Hello World HTTP server
First, install Node.js for your platform.
In this example we'll create an HTTP server listening on port 1337,
which sends Hello, World! to the browser.
Note that, instead of using port 1337, you can use any port number 
of your choice which is currently not in use by any other service.
The http module is a Node.js core module (a module included in Node.js's source,
that does not require installing additional resources).
The http module provides the functionality to create an HTTP server using the
http.createServer() method. To create the application,
create a file containing the following JavaScript code.

in terminal run node index.js
*/

const http = require('http');

console.log("this is a simple console log message");
console.log("an http server is live and listening to request at 1337");

http.createServer((request , response) => {
    /* response code */
    response.writeHead(200,{
       'Content-Type': 'text/plain'
    });
    /* response message */
    console.log("a request was made");
    response.write('Hello this is a response to the request made to localhost at 1337 port');
    console.log("response was sent");
    /* all response headers and body have been sent */
    response.end();

}).listen(1337);
// port to listen  