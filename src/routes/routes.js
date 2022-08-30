const express = require("express");
const router = express.Router();

const { getUsuarioController, postUsuarioController, putUsuarioController, deleteUsuarioController, getValidaUsuarioController } = require("../controllers/usuario.controllers");

router.get("/usuario", getUsuarioController);
router.post("/usuario", postUsuarioController);
router.put("/usuario/:id", putUsuarioController);
router.delete("/usuario/:id", deleteUsuarioController);

// Rota para validação de usuário
router.post("/validaUsuario", getValidaUsuarioController);

module.exports = { router };