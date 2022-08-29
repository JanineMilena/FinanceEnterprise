const { db } = require("../db/connect_db");

async function getUsuarioService(key, oper, value) {
    try {
        const conn = await db();
        const sql = key + oper + value;
        const [retorno] = await conn.query("SELECT * FROM usuario WHERE " + sql); // Isso deve ser alterado para evitar vulnerabilidades com sql injection
        return retorno;
    } catch (err) {
        return (err);
    }
};

async function postUsuarioService(nome, sobrenome, email, senha) {
    try {
        const conn = await db();
        const [retorno] = await conn.query("INSERT INTO usuario (id, ativo, nome, sobrenome, email, senha) VALUES (DEFAULT,1,?,?,?,?)",
            [nome, sobrenome, email, senha]
        );
        return retorno;
    } catch (err) {
        return (err);
    }
};

async function putUsuarioService(id, ativo, nome, sobrenome, email, senha) {
    try {
        const conn = await db();
        const [retorno] = await conn.query("UPDATE usuario SET ativo=?, nome=?, sobrenome=?, email=?, senha=? WHERE id=?",
            [ativo, nome, sobrenome, email, senha, id]
        );
        return retorno;
    } catch (err) {
        return (err);
    }
};

async function deleteUsuarioService(id) {
    try {
        const conn = await db();
        const [retorno] = await conn.query("DELETE FROM usuario WHERE id=?",
            [id]
        );
        return retorno;
    } catch (err) {
        return (err);
    }
};


module.exports = { getUsuarioService, postUsuarioService, putUsuarioService, deleteUsuarioService };