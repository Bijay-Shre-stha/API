const mongoose = require("mongoose")
const connectDB = () => {

    try {
        mongoose
            .connect("mongodb://127.0.0.1:27017/employeeData", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        console.log("MongoDB connection SUCCESS")
    } catch (error) {
        console.log("MongoDB connection FAIL")
        process.exit(1)
    }
}
module.exports = connectDB