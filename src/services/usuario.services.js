const { db } = require("../config/db.config");

// Lista usuários considerando um único determinado filtro por campo -- Validar melhorias para essa rota
async function getUsuarioService(key, oper, value) {
    try {
        const conn = await db();
        const [retorno] = await conn.query("SELECT * FROM usuario WHERE " + key + oper + "\'" + value + "\'"); // Isso deve ser alterado para evitar vulnerabilidades com sql injection
        return retorno;
    } catch (err) {
        return (err);
    }
};

// Faz a inserção de usuários: REVISADO
async function insertUserService(nome, sobrenome, email, senha) {
    try {
        // Faz a conexão com o banco de dados:
        const conn = await db();
        // Faz uma requisição para validar se já existe um usuário com o e-mail inserido no form:
        const [responseValidation] = await conn.query("SELECT usuario.id FROM usuario WHERE usuario.email = ?",
            [email]
        );
        // Se não houver um usuário cadastrado com esse e-mail, retorne falso e realize a inserção. Caso sim, retorne verdadeiro para existência:
        if (responseValidation.length == 0) {
            const [response] = await conn.query("INSERT INTO usuario (id, ativo, nome, sobrenome, email, senha) VALUES (DEFAULT,1,?,?,?,?)",
                [nome, sobrenome, email, senha]
            );
            return ({
                "type": "sucess",
                "message": "Registro inserido com sucesso!",
                "insertId": response.insertId
            });
        }
        return ({
            "type": "error",
            "message": "Usuário já está cadastrado!"
        });
    }
    // Caso ocorra um erro, retorno erro:
    catch (err) {
        return (err);
    }
};

// Faz a atualização de um usuário
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

// Faz a deleção de um usuário
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

// Faz a validação de se um usuário existe ou não no sistema -- Validar melhorias para essa rota
async function getValidaUsuarioService(email, senha) {
    try {
        const conn = await db();
        const [retorno] = await conn.query("SELECT * FROM usuario WHERE usuario.email = \'" + email + "\' AND usuario.senha = \'" + senha + "\'"); // Isso deve ser alterado para evitar vulnerabilidades com sql injection
        return retorno;
    } catch (err) {
        return (err);
    }
};

module.exports = { getUsuarioService, insertUserService, putUsuarioService, deleteUsuarioService, getValidaUsuarioService };