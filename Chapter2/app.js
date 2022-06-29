/*
This will make your application modular, customisable and your code reusable.
When accessing http://<hostname>:8080/api/v1/greet the output will be Hello world

*/

const express = require("express");
const myMiddleware = require("./greet.js");

// const myApp = express();

/*
    it takes a message
*/
/*
just a simple message for home path */
/*
myApp.get('/',(request,response)=>{
    var environment = process.env.NODE_ENV||8080;
    console.log("request at",request.path);
    console.log("sending response SERVER IS ACTIVE");
    response.send(`listening to requests at localhost ${environment}`);
});

myApp.use('/greetme',myMiddleware({message:"helloworld this is a middleware"}));

myApp.listen(8080,()=>{
    console.log("listening to request at localhost 8080")
});

*/

// router is require("express")
// since in greet.js it is const router = server.Router();
// Router is an interace



express().use("/greetme/" , myMiddleware({message : "this is a message from a middleware !! HELLO !!"})).listen(8080,()=>{
    console.log("server is running")
});


