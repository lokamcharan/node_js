
let express=require("express")
var port=3012
let app=express();
app.get("/",(request,response)=>{
    response.send("hello")
})
app.listen(port,()=>{
    console.log(`hi ${port} running`)
})




