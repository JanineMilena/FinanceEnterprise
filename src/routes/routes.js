const express = require("express");
const router = express.Router();

const { getUsuarioController, insertUsersController, updateUsersController, deleteUsersController, getValidaUsuarioController } = require("../controllers/usuario.controllers");

// Faz a inserção de usuários: REVISADO
router.post("/users", insertUsersController);
router.put("/users/:id", updateUsersController);
router.delete("/users/:id", deleteUsersController);

router.post("/getUsuario", getUsuarioController);
router.post("/validaUsuario", getValidaUsuarioController);

// Revisando

module.exports = { router };