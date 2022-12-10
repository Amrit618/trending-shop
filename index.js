const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DBConnection successful"))
  .catch((error) => {
    console.log("error");
  });

app.listen(process.env.PORT || 4000, () => {
  console.log("First program is running new on server on port 4000");
});
