const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
});

const employeeData = mongoose.model('employeeData', dataSchema);

module.exports = employeeData;