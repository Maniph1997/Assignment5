const express = require("express");
const app = express();
app.set('view engine', 'ejs');
var bodyParser = require('body-parser')
const multer  = require('multer')


const port = 8000;

const view = ("views","./views");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",(req,res)=>{
    res.send("hello, how are you");
})

app.get("/index",(req,res)=>{
    res.render("index.ejs");
})
app.get("/index/form",(req,res)=>{
    res.render("form.ejs");
})

app.post("/index/form",(req,res)=>{
    console.log(req.body);
    res.render("/");
})





app.listen(port,(req,res)=>{
    console.log("hello world");
})