const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/User");

dotenv.config();
mongoose
  .connect(
    "mongodb+srv://amrit:amrit@amritcluster.ufmjl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB successful"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json())
app.use("/api", userRoute);

app.listen(4000, () => {
  console.log("Backend server is running");
});
