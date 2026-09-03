const express = require("express");
const router = express.Router();

const controller = require("../controllers/clientesController");

router.get("/", controller.index);
router.post("/salvar", controller.salvar);


module.exports = router;
