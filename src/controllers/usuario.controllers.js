const { returnUsersService, insertUsersService, updateUsersService, deleteUsersService, validateUsersService } = require("../services/usuario.services");

// Lista usuários considerando um único determinado filtro por campo: REVISADO
async function returnUsersController(req, res) {
    try {
        const { key, oper, value } = req.body;
        const response = await returnUsersService(key, oper, value);
        return res.json(response);
    } catch (err) {
        return res.json(err);
    }
};
// Faz a inserção de usuários: REVISADO
async function insertUsersController(req, res) {
    try {
        const { name, surname, email, password } = req.body;
        const response = await insertUsersService(name, surname, email, password);
        return res.json(response);
    } catch (err) {
        return res.json(err);
    }
};
// Faz a atualização de um usuário: REVISADO
async function updateUsersController(req, res) {
    try {
        const { id } = req.params;
        const { active, name, surname, email, password } = req.body;
        const response = await updateUsersService(id, active, name, surname, email, password);
        return res.json(response);
    } catch (err) {
        return res.json(err);
    }
};
// Faz a deleção de um usuário: REVISADO
async function deleteUsersController(req, res) {
    try {
        const { id } = req.params;
        const response = await deleteUsersService(id);
        return res.json(response);
    } catch (err) {
        return res.json(err);
    }
};
// Faz a validação de se um usuário existe ou não no sistema: REVISADO
async function validateUsersController(req, res) {
    try {
        const { email, password } = req.body;
        const response = await validateUsersService(email, password);
        return res.json(response);
    } catch (err) {
        return res.json(err);
    }
};

module.exports = { returnUsersController, insertUsersController, updateUsersController, deleteUsersController, validateUsersController };