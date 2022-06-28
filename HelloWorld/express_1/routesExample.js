/*

refer :  https://expressjs.com/en/guide/routing.html

*/


// Import the top-level function of express
const express = require('express');
// Creates an Express application using the top-level function
const app = express();
// Define port number as 3000
const port = 3000;

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(request, response) {
    response.send('Hello, World!\n this is an express server running in background');
    });

// routes is /test
app.get('/test',function(request , response){
    response.send("hi this is a test route response");
});

// routes with q in it
app.get(/q/, (req, res) => {
    res.send('this route has q in it');
});

// routes with params
app.get('/name/:username/profession/:profession', (req, res) => {
    res.send(req.params);
    let parameters_1 = req.params;
    console.log("name : ",parameters_1['username']);
    console.log("profession : ",parameters_1['profession']);
  })

// Make the app listen on port 3000
app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);
    });