const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { PORT } = require('../config.js');
const app = express();
const { /*put funtions needed from db in here*/ } = require('../database/db')

const port = process.env.PORT || 3003;
app.use(express.static('dist'));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.listen(port, () => {
  console.log(`The shenanigans have started on aisle ${port}`);
});
