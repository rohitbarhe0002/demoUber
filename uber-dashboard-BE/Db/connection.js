const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv .config();
console.log(process.env.MONGODB_URL,"----")

mongoose.connect(process.env.MONGODB_URL,{ 
}).then(() => {
    console.log("userdashboard db is connected ");
}).catch((e)=>{
    console.log("no connection with userdashboard db");
})