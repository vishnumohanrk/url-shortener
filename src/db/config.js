const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DBURI;

mongoose
  .connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(res => console.log('DB Connected'))
  .catch(e => console.log('DB Connection Error'));
