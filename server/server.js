const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/dbConnect");

dotenv.config({ path: "./config.env" });

// connect DB
connectDB();

// PORT
const PORT = 4000 || process.env.PORT;

// listen to server
app.listen(PORT, () => {
  console.log("::: 🚀 Server has started :::".cyan.bold);
});
