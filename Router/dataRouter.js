const router = require("express").Router();
const { renderData, renderCreateData, createData, renderEditData, editData, deleteData } = require("../controller/pageController");

router.route("/").get(renderData);
router.route("/create").get(renderCreateData).post(createData);
router.route("/edit/:id").get(renderEditData).post(editData);
router.route("/delete/:id").get(deleteData);

module.exports = router;
