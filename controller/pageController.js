const port = 3000;
const employeeData = require("../model/dataModel");


exports.portController = () => {
    console.log(`Server is running on port ${port}`);
};

exports.renderData = async (req, res) => {
    try {
        const data = await employeeData.find();
        res.render("index", { data });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.renderCreateData = (req, res) => {
    res.render("create");
};

exports.createData = async (req, res) => {
    try {
        const { name, email, dob, position } = req.body;
        await employeeData.create({ name, email, dob, position });
        console.log(req.body);
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.renderEditData = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await employeeData.findById(id);
        res.render("edit", { employeeData: data }); 
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.editData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, dob, position } = req.body;
        await employeeData.findByIdAndUpdate(id, { name, email, dob, position });
        console.log(req.body);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

exports.deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        await employeeData.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
