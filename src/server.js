const express = require('express');
const { router } = require('./routes/routes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.use('/register', express.static('./src/static/pages/register.html'));
app.use('/system', express.static('./src/static/pages/system.html'));
app.use('/status', express.static('./src/static/pages/status.html'));
app.use('/login', express.static('./src/static/pages/login.html'));

app.use('/scripts', express.static('./src/static/scripts'));
app.use('/images', express.static('./src/static/images'));
app.use('/css', express.static('./src/static/css'));

app.listen(8800);
console.log('server running on port 8800');