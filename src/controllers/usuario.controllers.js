const { getUsuarioService, insertUsersService, updateUsersService, deleteUsersService, getValidaUsuarioService } = require("../services/usuario.services");

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



async function getUsuarioController(req, res) {
    try {
        const { key, oper, value } = req.body;
        const retorno = await getUsuarioService(key, oper, value);
        return res.json(retorno);
    } catch (err) {
        return res.json(err);
    }
};
async function getValidaUsuarioController(req, res) {
    try {
        const { email, senha } = req.body;
        const retorno = await getValidaUsuarioService(email, senha);
        return res.json(retorno);
    } catch (err) {
        return res.json(err);
    }
};

module.exports = { getUsuarioController, insertUsersController, updateUsersController, deleteUsersController, getValidaUsuarioController };