const express = require('express');
const user_route = express();

//bodyparser
const bodyparser = require('body-parser');
user_route.use(bodyparser.json());
user_route.use(bodyparser.urlencoded({extended:true}));

//controller
const userController = require('../controller/UserController');

//routes
user_route.post('/register',userController.register);
user_route.post('/login',userController.login);

module.exports = user_route;