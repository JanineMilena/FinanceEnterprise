const express = require('express');
const { router } = require('./routes/routes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);
app.use('/register', express.static('/static/pages/register.html'));

app.use('/css', express.static('./static/css'));
app.use('/images', express.static('./static/images'));
app.use('/scripts', express.static('./static/scripts'));

app.listen(8800);
console.log('server run');