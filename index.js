const express = require ("express")
const app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://amrit:amrit@amritcluster.ufmjl.mongodb.net/?retryWrites=true&w=majority")
.then(()=>("DBConnection successful"))
app.listen(4000, () =>{
    console.log("First program is running new on server")
})