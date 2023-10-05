const router = require("express").Router();

const { renderData, data, editData, deleteData } = require("../controller/pageController");
router.get("/",renderData);
router.post("/",data);
router.put("/:id", editData);
router.delete("/:id", deleteData);
module.exports=router;
