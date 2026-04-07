const express = require('express')
const app = express();

const usermodel = require('./usermodel');


app.get("/" , function(req,res){
    res.send("heyy")
})

app.get("/create" , async function(req,res){
    let createuser = await usermodel.create({
        name : "Niharika",
        email : "nihalgoud@gmail.com",
        username : "nihal_04"
    })
    res.send(createuser);
})

app.get("/read" , async function(req,res){
    let users = await usermodel.find({username : "nihal_04"})
    res.send(users)
})

app.get("/updated" , async function(req,res){
    let updateuser = await usermodel.findOneAndUpdate({name:"Nihal"} , {name : "Nihal Goud"} , {new : true})
    res.send(updateuser);
})

app.get("/delete" , async function(req,res){
    let deleteUser = await usermodel.findOneAndDelete({name : "Nihal Goud"})
    res.send(deleteUser)
})

app.listen(3000);
