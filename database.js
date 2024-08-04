let sql=require("mysql2")
let connect=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodejs"

})

connect.connect(()=>{
    console.log("hi sql has been connected")
})
module.exports=connect;