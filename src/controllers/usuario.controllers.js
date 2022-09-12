const { getUsuarioService, insertUserService, putUsuarioService, deleteUsuarioService, getValidaUsuarioService } = require("../services/usuario.services");

async function getUsuarioController(req, res) {
    try {
        const { key, oper, value } = req.body;
        const retorno = await getUsuarioService(key, oper, value);
        return res.json(retorno);
    } catch (err) {
        return res.json(err);
    }
};

// Faz a inserção de usuários: REVISADO
async function insertUserController(req, res) {
    try {
        const { nome, sobrenome, email, senha } = req.body;
        const response = await insertUserService(nome, sobrenome, email, senha);
        return res.json(response);
    } catch (err) {
        return res.json(err);
    }
};

async function putUsuarioController(req, res) {
    try {
        const { id } = req.params;
        const { ativo, nome, sobrenome, email, senha } = req.body;
        const retorno = await putUsuarioService(id, ativo, nome, sobrenome, email, senha);
        return res.json(retorno);
    } catch (err) {
        return res.json(err);
    }
};

async function deleteUsuarioController(req, res) {
    try {
        const { id } = req.params;
        const retorno = await deleteUsuarioService(id);
        return res.json(retorno);
    } catch (err) {
        return res.json(err);
    }
};

async function getValidaUsuarioController(req, res) {
    try {
        const { email, senha } = req.body;
        const retorno = await getValidaUsuarioService(email, senha);
        return res(retorno);
    } catch (err) {
        return res.json(err);
    }
};

module.exports = { getUsuarioController, insertUserController, putUsuarioController, deleteUsuarioController, getValidaUsuarioController };