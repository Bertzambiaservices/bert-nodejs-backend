const express = require('express');
const app = express();

//dotenv
require('dotenv').config();

//mongoose
const mongoose = require('mongoose');
const { route } = require('./route/UserRoutes');
mongoose.connect('mongodb+srv://Bert:b123456@cluster0.naaxpd4.mongodb.net/bert');

mongoose.connection.once('open',()=>{
    console.log('mongoose mongoose.connected');
});

mongoose.connection.on('error',()=>{
    console.log('mongoose connection failed'+error);
});

//route
const UserRoutes = require('./route/UserRoutes');
app.use('/api',UserRoutes);

//server
app.listen(process.env.PORT,()=>{
    console.log(`Server is runing on ${process.env.PORT}`);
});