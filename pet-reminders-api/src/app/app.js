const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const environment = require('../environments/environment');
 
const URL_DB = environment.db_url;

const usersRoutes = require('./routes/users');

const URL_API_USERS = '/api/users';
 
const app = express();
 
// connection to mongoDB
mongoose
    .connect(URL_DB, { useNewUrlParser: true })
    .then(() => { console.log("Connected to database!"); })
    .catch(() => { console.log("Connection to mongoDB failed!"); });
 
// CORS configuration https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    next();
})
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(URL_API_USERS, usersRoutes);
 
module.exports = app;