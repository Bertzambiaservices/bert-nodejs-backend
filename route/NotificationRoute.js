const express = require('express');
const user_route = express();

//bodyparser
const bodyparser = require('body-parser');
user_route.use(bodyparser.json());
user_route.use(bodyparser.urlencoded({extended:true}));

//controller
const notificationController = require('../controller/NotificationController');

//routes
user_route.get('/notify',NotificationController.notify);

module.exports = user_route;