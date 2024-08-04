
var a=20;
function hello(){
    return "hello"
}
// console.log(a)
module.exports.a=hello;

// ================express using single port==============
// let express=require("express")
// var port=3005
// let app=express();
//  app.get("/",(request,response)=>{
//     response.send("hello hk");

// })
// app.post("/hk",(request,response)=>{
//     response.send("hello kanna");
// })
// app.listen(port,()=>{
//     console.log(`hi ${port} running`)
// })

// ==============middleware extension with json shortcut===========
// let express=require("express")
// var port=3005
// let app=express();

// app.use((request,response,next)=>{
//     var body="";
//     request.on("data",(chunk)=>{
//         body+=chunk.toString();

//     })
//     request.on("end",()=>{
//         console.log(body);
//         request.body=body 
//         next();
//     })
// })
//  app.get("/",(request,response)=>{
//     console.log(request.body);
//     response.send("hello hk");

// }) 
// app.post("/hk",(request,response)=>{
//     console.log(request.body)
//     response.send("hello kanna");
// })
// app.listen(port,()=>{
//     console.log(`hi ${port} running`)
// })

// ==========with json=================

// let express = require("express");
// var port = 3005;
// let app = express();

// app.use(express.json());

// app.get("/", (request, response) => {
//   response.send("hello hk");
// });

// app.post("/hk", (request, response) => {
//   response.send("hello kanna");
// });

// app.listen(port, () => {
//   console.log(`hi ${port} running`);
// });

// ===========register data get post=====

// let express = require("express");
// var port = 3005;
// let app = express();
// let fs=require("fs")

// var register=[]
// app.use(express.json());

// app.get("/users", (request, response) => {
//  fs.readFile("index.json",(error,data)=>{
//     console.log();
//     response.json(JSON.parse(data));
//  })
// });

// app.post("/", (request, response) => {
//     register.push(request.body);
//     fs.writeFile("index.json",JSON.stringify(register),(error)=>{
//         response.json("stored successfully");
//     })
  
// });

// app.listen(port, () => {
//   console.log(`hi ${port} running`);
// });

