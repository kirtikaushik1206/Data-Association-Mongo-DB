const express= require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/create' , async function (req,res) {
    let user= await userModel.create({
        username:"kirti",
        age:19,
        email:"kirts@gmail.com"
    });
    res.send(user);
})

app.listen(3000);