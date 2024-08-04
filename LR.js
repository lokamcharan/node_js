// const { error } = require("console")
const express=require("express")
const fs=require("fs")
var port=3010;
const api=express()

let register=[]
api.use(express.json())

api.post("/register",(req,res)=>{
    // console.log(req.body)

    const {username,password,email,confirmPassword}=req.body
    // console.log(username)
    // console.log(password)
    // console.log(email)
    // console.log(confirmPassword);

    fs.readFile("index.json",(err,data)=>{
        const users=JSON.parse(data)
        console.log(users)
        const foundUser = users.find(user => user.username === username || user.email === email)

        if(foundUser){
            res.send("the user is already exist")
        }
        else if(password === confirmPassword){
            register.push(req.body)

            fs.writeFile("index.json",(JSON.stringify(register)),(err)=>{
                res.json("success register")
            })
        }
        else{
            res.send("password doesn't match")
        }

    })
})

//Login

api.get("/login",(req,res)=>{

    const {username,password}=req.body
   

    fs.readFile("./index.json",(err,data)=>{
        // console.log(JSON.parse(data));
        const users=JSON.parse(data)
        console.log(users)
        const foundUser = users.find(user => user.username === username && user.password === password)

console.log(foundUser);


    if(foundUser){
        res.send("the user is successful login")
    }
    else{
        res.send("the user is invalid login")
    }
    })

    // const users=JSON.parse(req.body)



    // console.log(req.body)
    // console.log(username)
    // console.log(password)
    
})



api.listen(port,()=>console.log("the port is running succesful"))