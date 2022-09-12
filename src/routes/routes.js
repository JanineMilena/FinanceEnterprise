const express = require("express");
const router = express.Router();

const { getUsuarioController, insertUsuarioController, putUsuarioController, deleteUsuarioController, getValidaUsuarioController } = require("../controllers/usuario.controllers");

router.post("/getUsuario", getUsuarioController);
router.put("/usuario/:id", putUsuarioController);
router.delete("/usuario/:id", deleteUsuarioController);
router.post("/validaUsuario", getValidaUsuarioController);

// Faz a inserção de usuários: REVISADO
router.post("/usuario", insertUsuarioController);

module.exports = { router };