//http module

// three tyoe of module (internal,external and custom)


const http= require("http"); // http module is an internal module // it is use to create module


//req and res are object
//req willconsist all the things comming from clients endn
//res will be something that server would send
const listener = function (req,res){
res.write("hey its working");
res.end();

};


const server = http.createServer(listener);

server.listen(9090 , function(){
    console.log("server Running")
});