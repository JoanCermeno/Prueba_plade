const express = require("express");
const app = express();
const morgan = require('morgan');
const con = require('./database/database');
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routers
app.use(require('./routes'));
//setting
const port = 6969;
app.listen(port);
app.use(morgan("dev"));
console.log("Server Listen on port " + port);

