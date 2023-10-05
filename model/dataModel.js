const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary:{
        type: Number,
        required: true,
    }, 
    age:{
        type: Number,
        required: true,
    },
});
const employeeData =mongoose.model('employeeData',dataSchema)
module.exports=employeeData;