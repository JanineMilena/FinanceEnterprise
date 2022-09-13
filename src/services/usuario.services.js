const { db } = require("../config/db.config");
const bcrypt = require('bcryptjs');

// REVISAR A FUNÇÃO UTILIZADA PARA VALIDAÇÃO, CÓDIGO O MAIS LIMPO POSSÍVEL...

// Faz a inserção de usuários: REVISADO
async function insertUsersService(name, surname, email, password) {
    try {
        const conn = await db();

        const responseValidation = await getUsuarioService('email', '=', email);

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        if (responseValidation.length == 0) {
            const [response] = await conn.query("INSERT INTO users (id, active, name, surname, email, password) VALUES (DEFAULT,1,?,?,?,?)",
                [name, surname, email, hash]
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
    catch (err) {
        return (err);
    }
};
// Faz a atualização de um usuário: REVISADO
async function updateUsersService(id, active, name, surname, email, password) {
    try {
        const conn = await db();
        await conn.query("UPDATE users SET active=?, name=?, surname=?, email=?, password=? WHERE id=?",
            [active, name, surname, email, password, id]
        );
        return ({
            "type": "sucess",
            "message": "Registro atualizado com sucesso!",
        })
    } catch (err) {
        return (err);
    }
};
// Faz a deleção de um usuário: REVISADO
async function deleteUsersService(id) {
    try {
        const conn = await db();

        let responseValidation = await getUsuarioService('id', '=', id);

        if (responseValidation.length > 0) {
            await conn.query("DELETE FROM users WHERE id=?",
                [id]
            );
            return ({
                "type": "sucess",
                "message": "Registro deletado com sucesso!",
            })
        }
        return ({
            "type": "error",
            "message": "Usuário não existe!"
        });
    } catch (err) {
        return (err);
    }
};




// Lista usuários considerando um único determinado filtro por campo -- Validar melhorias para essa rota
async function getUsuarioService(key, oper, value) {
    try {
        const conn = await db()
        const [retorno] = await conn.query("SELECT * FROM users WHERE " + key + oper + "\'" + value + "\'"); // Isso deve ser alterado para evitar vulnerabilidades com sql injection
        return retorno;
    } catch (err) {
        return (err);
    }
};
// Faz a validação de se um usuário existe ou não no sistema -- Validar melhorias para essa rota
async function getValidaUsuarioService(email, senha) {
    try {
        const responseValidation = await getUsuarioService('email', '=', email);

        if ((bcrypt.compareSync(senha, responseValidation[0].password)) == true) {
            return ({
                "type": "sucess",
                "message": "Usuário existe no sistema!"
            });
        }
        return ({
            "type": "error",
            "message": "Usuário não existe!"
        });
    } catch (err) {
        return (err);
    }
};

module.exports = { getUsuarioService, insertUsersService, updateUsersService, deleteUsersService, getValidaUsuarioService };