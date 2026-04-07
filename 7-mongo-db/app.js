const express = require('express')
const app = express();
const path = require('path');
const usermodel = require('./models/user');
const { read } = require('fs');


app.set('view engine' , 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/" , function(req , res){
    res.render("index")
})

app.get("/read", async function (req, res) {
    let allUsers = await usermodel.find(); 
    res.render("read", { users: allUsers });
});

app.get("/delete/:id", async function (req, res) {
    let users = await usermodel.findOneAndDelete({_id: req.params.id}); 
    res.redirect("/read")
});

app.post("/create" , async function(req,res){
   let {name , email , image} = req.body;

   let createdUser = await usermodel.create({
     name,
     email,
     image
   });

   res.redirect("./read")
})

app.listen(3000);