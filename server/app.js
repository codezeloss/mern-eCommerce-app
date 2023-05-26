const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const colors = require("colors");

const authRoute = require('./routes/authRoute')
const {notFound, errorHandler} = require("./middlewares/errorHandler");

// MIDDLEWARES
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

// ROUTES
app.use("/api/user", authRoute)

// ERROR HANDLERS
app.use(notFound)
app.use(errorHandler)

module.exports = app;