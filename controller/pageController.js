const port = 3000;
const employeeData = require("../model/dataModel");
exports.portController = ()=>{
    console.log(`Server is running on port ${port}`);
}

exports.renderData = async (req, res) => {
    try {
        const data = await employeeData.find();
        res.send(data);
    } catch (err) {
        console.error("Error fetching employee data:", err);
        res.status(500).send({ message: "Error Occurred" });
    }
}

exports.data = async (req, res) => {
    try {
        const data = await employeeData.create(req.body);
        res.send({
            data,
            message: "Data inserted",
        });
    } catch (err) {
        console.error("Error inserting employee data:", err);
        res.status(500).send({ message: "Error Occurred" });
    }
}

exports.editData = async (req, res) => {
    try {
        const data = await employeeData.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.send({
            data,
            message: "Data updated",
        });
    } catch (err) {
        console.error("Error updating employee data:", err);
        res.status(500).send({ message: "Error Occurred" });
    }
}
exports.deleteData =async (req, res) => {
    try {
        const data = await employeeData.findByIdAndRemove(req.params.id);
        res.send({
            data,
            message: "Data deleted",
        });
    } catch (err) {
        console.error("Error deleting employee data:", err);
        res.status(500).send({ message: "Error Occurred" });
    }
}