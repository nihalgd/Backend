const express = require('express')
const app = express();

const usermodel = require('./usermodel');


app.get("/" , function(req,res){
    res.send("heyy")
})

app.get("/create" , async function(req,res){
    let createuser = await usermodel.create({
        name : "Nihal",
        email : "nihalgoud.12345@gmail.com",
        username : "nihal_04"
    })
    res.send(createuser);
})

app.get("/update" , async function(req,res){
   
})

app.listen(3000);
