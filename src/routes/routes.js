const express = require("express");
const router = express.Router();

const { returnUsersController, insertUsersController, updateUsersController, deleteUsersController, validateUsersController } = require("../controllers/usuario.controllers");

// Lista usuários considerando um único determinado filtro por campo: REVISADO
router.post("/returnUsers", returnUsersController);
// Faz a inserção de usuários: REVISADO
router.post("/users", insertUsersController);
// Faz a atualização de um usuário: REVISADO
router.put("/users/:id", updateUsersController);
// Faz a deleção de um usuário: REVISADO
router.delete("/users/:id", deleteUsersController);
// Faz a validação de se um usuário existe ou não no sistema: REVISADO
router.post("/validateUsers", validateUsersController);

module.exports = { router };