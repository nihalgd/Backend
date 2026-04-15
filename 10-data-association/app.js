const express = require('express')
const app = express();
const userModel = require("./models/view")
const postModel = require("./models/post")


app.get("/" , function(req,res){
    res.send("hey")
})

app.get("/create" , async function(req,res){
    let user = await userModel.create({
        username : "Nihal",
        email : "nihal@gmail.com",
        age : 25
    })
    res.send(user)
})

app.listen(3000);