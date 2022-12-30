const mqtt = require("mqtt");
//pour l'utilisation d'un broker local 
// var client = mqtt.connect('mqtt://127.0.0.1:1889');
var client = mqtt.connect('mqtt://broker.hivemq.com');


client.on("connect",function(){
    client.subscribe('LOTFI_MQTT');
    console.log('Client subscribed successfully');

});
    client.on("message",function(topic, message){

        console.log(message.toString());

    });