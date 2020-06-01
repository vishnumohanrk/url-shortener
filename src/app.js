const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('./db/config');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/url'));

app.listen(port, () => console.log(`Running on PORT:${port}`));
