async function db() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/finance_enterprise_db"); // Padrão -> "mysql://usuario:senha@servidor:porta/banco"
    global.connection = connection;

    console.log('Connect to database');

    return connection;
}
module.exports = { db };