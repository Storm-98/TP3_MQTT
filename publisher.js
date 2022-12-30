const mqtt = require("mqtt");
//pour l'utilisation d'un broker local 
// var client = mqtt.connect('mqtt://127.0.0.1:1889');
var client = mqtt.connect('mqtt://broker.hivemq.com');



client.on("connect",function()

{

    setInterval(function(){

        {
            client.publish('LOTFI_MQTT','Hello IOT world');
        }

    }),30000;

});
