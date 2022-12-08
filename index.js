const express = require ("express")
const app = express()
const mongoose = require('mongoose')
const dotenv = require("dotenv")

dotenv.config()
mongoose.set() 

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("DBConnection successful"))
.catch((err) =>
{console.log(err)});

app.listen(process.env.PORT || 4000, () =>{
    console.log("First program is running new on server on port 4000")
})