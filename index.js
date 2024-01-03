const express = require('express');
const app = express();

//dotenv
require('dotenv').config();

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bertzambiaservices:Mofyaalbert%402023@bertcluster.mx7xosx.mongodb.net/bert');

mongoose.connection.once('open',()=>{
    console.log('mongoose connected');
});

mongoose.connection.on('error',()=>{
    console.log('Mongoose connection failed '+error);
});

//user routes
const userRoute = require('./route/UserRoute');
app.use('/api',userRoute);

//notification route
const notifyRoute = require('./route/NotificationRoute');
app.use('/api',notifyRoute);

//server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});