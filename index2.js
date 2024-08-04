
// var a=require("http")
// a.createServer((req,res)=>{
//     res.write("hello cherry")
//     res.end()
// }).listen(3005,()=>{
//     console.log("hello server running ....3005")
// })
// var a=require("./index")

//const { request, response, request, request, request, json, json } = require("express");

// console.log(a);
// console.log(a.a());
// =============hit server by url====snd http=====
// var http=require("http")
// var url=require("url")

// http.createServer((request,response)=>{
//     // response.write(JSON.stringify({"HELLO":"WORLD"}));
// console.log(request.url);
//     let a=url.parse(request.url,true);

//     console.log(a); 
//     response.write("hello i am uk");
//     response.end();
// }).listen(3005,()=>{
//     console.log("hi server is running on 3005")
// });



// ==========extra path of url routing of http end========

// var http=require("http")
// var url=require("url")

// http.createServer((request,response)=>{
//     // response.write(JSON.stringify({"HELLO":"WORLD"}));
// console.log(request.url);
//     let a=url.parse(request.url,true);
// if(a.pathname=="/register"){
//     console.log(request.url); 
//     // response.write(JSON.stringify([{"user":"Registered"}]));
//     response.write("user registered");
//     response.end();
// }else if(a.pathname=="/login"){
//     // response.write(JSON.stringify([{"user":"login"}]));
//     response.write("user successfully login");
//     response.end();
// }else{
//     response.write(" something went wrong");
//     response.end();
// }
// }).listen(3005,()=>{
//     console.log("hi server is running on 3005")
// });

// ============request.METHODS()======================
// var http=require("http")
// var url=require("url")

// http.createServer((request,response)=>{
//     // response.write(JSON.stringify({"HELLO":"WORLD"}));
// console.log(request.url);
//     let a=url.parse(request.url,true);
//     console.log(request.url)
//     console.log(request.method);
// if(a.pathname=="/register" && request.method=="GET"){
//     console.log(request.url); 
//     response.write(JSON.stringify([{"user":"Registered"}]));
//     // response.write("user registered");
//     response.end();
// }else if(a.pathname=="/register" && request.method=="POST"){
//     response.write("hello krishil");
//     // response.write("user successfully login");
//     response.end();
// }else{
//     response.write(" something went wrong");
//     response.end();
// }
// }).listen(3005,()=>{
//     console.log("hi server is running on 3005")
// });

// ========= FileSystem curd opeartion=====
// ==========ReadFile=================

// var http=require("http")
// var url=require("url")
// var file=require("fs");
// // const { query } = require("express");
// http.createServer((request,response)=>{
   
// console.log(request.url);
//     let a=url.parse(request.url,true);
//     console.log(request.url)
//     console.log(request.method);
// if(a.pathname=="/register" && request.method=="GET"){
//     file.readFile("./index.html",(error,data)=>{

//         if(error){
//             response.write(error); 
//          response.end();
//         }else{
//         response.write(data); 
//          response.end();
//         }

//     });
   
// }else if(a.pathname=="/register" && request.method=="POST"){
//     response.write("hi sushanth");
   
//     response.end();
// }else{
//     response.write(" something went wrong");
//     response.end();
// }
// }).listen(3002,()=>{
//     console.log("hi server is running  3005")
// });
////=============create file===============


// var http = require("http");
// var url = require("url");
// var fs = require("fs");

// http.createServer((request, response) => {
//     console.log(request.url);
//     let parsedUrl = url.parse(request.url, true);
//     console.log(request.url);
//     console.log(request.method);

//     if (parsedUrl.pathname === "/register" && request.method === "GET") {
//         fs.rename("./index2.txt","./index123" , (error, data) => {
//             if (error) {
//                 response.write(error);
//                 response.end();
//             } else {
//                 response.write("file updated");
//                 response.end();
//             }
//         });

//     } else if (parsedUrl.pathname === "/register" && request.method === "POST") {
//         response.write("hi sushanth");
//         response.end();
//     } else {
//         response.write("something went wrong");
//         response.end();
//     }
// }).listen(3001, () => {
//     console.log("hi server is running on 3005");
// });


//========write==================
// aaa.write("./index.txt")
// =========delete file=====
// aaa.unlink("./index.txt")
// ======rename===========
// aaa.rename("./index.txt")

// =========query pragram====

// var http = require("http");
// var url = require("url");

// http.createServer((request, response) => {
//     console.log(request.url);
//     let a = url.parse(request.url, true);
//     console.log(request.url);
//     console.log(a.query);

//     if (a.pathname === "/register" && request.method === "GET") {
//         response.write("hello 10k coders");
//         response.end();

//     } else if (a.pathname === "/register" && request.method === "POST") {
//         response.write("hi sushanth");
//         response.end();
//     } else {
//         response.write("something went wrong");
//         response.end();
//     }
// }).listen(3005, () => {
//     console.log("hi server is running on 3005");
// });


// ===========body data getting===========

// var http = require("http");
// var url = require("url");
// var fs = require("fs");

// http.createServer((request, response) => {
//     console.log(request.url);

//     let parsedUrl = url.parse(request.url, true);
//     console.log(request.url);
//     console.log(parsedUrl.query);

//     if (parsedUrl.pathname === "/register" && request.method === "GET") {
//         response.write("hello 10k coders");
//         response.end();

//     } else if (parsedUrl.pathname === "/register" && request.method === "POST") {
//         var body = "";
//         request.on('data', (chunk) => {
//             body += chunk.toString();
//         });
//         request.on('end', () => {
//             console.log(body);
//             fs.writeFile("index1.txt", body, (error) => {
//                 console.log(error);
//                 response.write("hello");
//                 response.end();      
//             });

//         });
//     } else {
//         response.write("something went wrong");
//         response.end();
//     }
// }).listen(3005, () => {
//     console.log("hi server is running  3005");
// });


// =======express============

// var express=require("express");

// var app = express();


// app.get("/login",(req,res)=>{

//     res.send("hello server")

// })

// app.listen(3005, (err)=>{
//     if(err){
//         console.log("server not running");

//     }else{
//         console.log("server running here ");
//     }
   
// })

