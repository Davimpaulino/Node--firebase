const express = require("express");
const router = express.Router();

const controller = require("../controllers/fornecedoresController");

router.get("/", controller.index);
router.post("/salvar", controller.salvar)


module.exports = router;
