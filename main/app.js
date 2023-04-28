const express=require("express");
const app =express()

const PORT=5000;
app.get("/main/login.html",(req,res)=>{
    res.send("I am a server");
})

const start =async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`I am live in port no ${PORT}`);
        });
    }
    catch(error){}
};

start();