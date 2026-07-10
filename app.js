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
app.get('/post' , async function(req,res){
    let post = await postModel.create({
        postdata: "hi lol",
        user:"6a50dfed195f1e5bac6133e6"
    })
    let user = await userModel.findOne({_id:"6a50dfed195f1e5bac6133e6"});
    user.posts.push(post);
    await user.save();
    res.send(post, user);
})

app.listen(3000);