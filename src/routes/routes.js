const express = require("express");
const router = express.Router();

const { getUsuarioController, postUsuarioController, putUsuarioController, deleteUsuarioController } = require("../controllers/usuario.controllers");

router.get("/usuario", getUsuarioController);
router.post("/usuario", postUsuarioController);
router.put("/usuario/:id", putUsuarioController);
router.delete("/usuario/:id", deleteUsuarioController);

module.exports = { router };