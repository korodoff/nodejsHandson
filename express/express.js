 const express = require("express");

 const app = express();


 app.get("/api/main", function(req,res){
    res.send("insanity")
    res.send("<h1>farOut Loud</h1>")
    res.send({
        message:"hello Human",
        Number:10
    })
 })
 app.get("/api/main", function(req,res){
    res.send("<h1>farOut Loud</h1>")
    res.send({
        message:"hello Human",
        Number:10
    })
 })
    
    


 app.listen(9090,function(){
    console.log("server started")
 })

