/*
 
index.js:- This file starts your web server. All your set up logic should be in this file.
for this example project name is Chapter2_renderingTemplates

use npm run dev -- runs nodemon with index.js automatically restarts server whenever source changes
*/

/*

refer :  https://expressjs.com/en/guide/routing.html

*/


// Import the top-level function of express
const express = require('express');
// Creates an Express application using the top-level function
const app = express();
// Define port number as 3000
const port = 3000;

/*
 The path module provides you with utilities for working with file and directory paths.
 You'll use it later  to create cross-platform file paths to access view templates and static assets,
 such as stylesheets and images.
*/

const path = require("path");


// app configurations

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "pug");
// serving static files
app.use(express.static(path.join(__dirname , "public")));

// routes

app.get("/",(req , res)=>{
    console.log("sending base pug as a response to /");
    res.render("base" , {title:"my custom title"});
});


app.get("/home",(req , res)=>{
    console.log("sending home pug as a response to /home");
    res.render("home" , {title:"pug for rendering templates"});
});

// start express server

app.listen(port , ()=>{
    console.log("server now listening to your request at localhost port 3000");
});
