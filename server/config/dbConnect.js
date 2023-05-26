const mongoose = require("mongoose");
const {connect} = require("mongoose");
const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGODB_URI)
        console.log("::: ✅  DB connection successful :::".magenta.bold);
    } catch (error) {
        console.log("::: Some DB errors occurred!! :::".red.bold);
        console.log(error.message);
    }

};

module.exports = connectDB;