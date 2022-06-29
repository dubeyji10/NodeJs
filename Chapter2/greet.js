/*
    this is a module
*/
console.log("here");
const server = require("express");

module.exports = function (options = {}){
    console.log("exported");
    const router = server.Router();
    // express.router ...
    router.get('/greet',(req,res,next) =>{
        res.end(options.message);
        next();
    });

    return router;

}

// export this midddleware
// module.exports = myGreetings;