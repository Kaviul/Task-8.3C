const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com:1883', {
     username : process.env.USERNAME,
     password : process.env.PASSWORD 
   });


const topic9 = 'drones/#'
const topic10 = 'drones/short distance/speed'
const topic11 = 'drones/+/battery'
const topic12= 'drones/long distance/longitude-latitude'



// Callback when connected to the MQTT broker
client.on('connect', () => {
  console.log('Connected to MQTT broker');

 // Subscribe to all drone messages
  client.subscribe('drones/#', (err) => {
    if (!err) {
      console.log('Subscribed to all drone messages');
    } else {
      console.error('Data Subscription error:', err);
    }
  });

  //Subscribe to the Speeds of Short distance drones
   client.subscribe('drones/short distance/speed', (err) => {
    if (!err) {
      console.log('Subscribed to Short distance drone speeds');
    } else {
      console.error('Short distance Subscription error:', err);
    }
  });


// // Subscribe to the battery levels of all drones
client.subscribe('drones/+/battery', (err) => {
  if (!err) {
    console.log('Subscribed to battery levels of all drones');
  } else {
    console.error('battery level Subscription error:', err);
  }
});

// // // Subscribe to the latitude and longitude values of Long distance drones
client.subscribe('drones/long distance/longitude-latitude', (err) => {
  if (!err) {
    console.log('Subscribed to latitude and longitude values of Long distance drones');
  } else {
    console.error('Lat/Long Subscription error:', err);
  }
});

// Callback when a message is received
client.on('message', (topic, message) => {
  console.log(`Received message on topic '${topic}': ${message.toString()}`);
});

});



