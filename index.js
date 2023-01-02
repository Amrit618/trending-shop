const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/User");
const authRoute = require("./routes/Auth");

dotenv.config();
mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => console.log("DB successful"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json())
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 4000, () => {
  console.log("Backend server is running");
});
