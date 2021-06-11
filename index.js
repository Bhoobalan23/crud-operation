var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors")
var morgan = require("morgan");
var app = express();

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.listen(4000,()=>{
    console.log("server starting at 4000")
})

const home =require("./home.js")
app.use("/home",home)


mongoose.connect("mongodb://localhost/Table",{useNewUrlParser: true , useUnifiedTopology: true},err =>{
    if(!err){
        console.log("database connected")
    }
    else{
        console.log("error"+err)
    }
})
