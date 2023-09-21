const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.status(200).send({
        success:true,
        message:"Root Route"
    })
});

app.post('/',(req,res)=>{

    let user = {
        username:req.body.username,
        password:req.body.password
    }

    res.status(201).send({
        success:true,
        message:"Login Form Submitted",
        user,
    })
});

app.get('/about',(req,res)=>{
    res.send({
        success:true,
        message:"About Route"
    })
});

module.exports = app;