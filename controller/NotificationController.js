const fcm_key = require('../config/fcm_key.json');
const FCM = require('fcm-node');

const notify = async (req, res) => {
    var fcm = new FCM(fcm_key);

    var message = {
    to:'notify',
    Notification:{
        title:"title 1 demo",
        body:"body 1 demo"
    }
    };

    fcm.send(message,function (err,response){
    if(err){
        console.log('Error sending fcm message'+err);
    }else{
        console.log("sent with message id: "+JSON.stringify(response));
    }
    })
    
}


module.exports = {
    notify,
}