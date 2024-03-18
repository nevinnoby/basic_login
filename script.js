const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("views"));

const Email="abc@gmail.com";
const Password="123";
app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    if(email === Email && password === Password){
        res.send("logged in succesfully")
    }
    else{
        res.send("Login failed")
    }
        
    
});


const PORT=3000;
app.listen(PORT,()=>console.log(`listening on port ${PORT}`))