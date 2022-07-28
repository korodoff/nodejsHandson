const express =  require("express")
const app = express();

const middleware1= (req,res, next) => {
console.log("middleware1")
next()
}
const middleware2= (req,res, next) => {
    console.log("middleware2")
    next()
    }
app.use(middleware2)

app.get("/page1",middleware1, function(req,res){
    res.send("both middlware1 and middleware2 is being applied")
})
app.get("/page2", function(req,res){
    res.send("middleware2 is being applied")
})
app.get("/page3", middleware1, function(req,res){
    res.send("both middlware1 and middleware2 is being applied")
})
app.get("/page4", function(req,res){
    res.send("only middleware2 is being applide ")
})
app.get("/page5", middleware1, function(req,res){
    res.send("both middlware1 and middleware2 is being applied")
})

app.listen(9090,function(){
    console.log("server is running")
})