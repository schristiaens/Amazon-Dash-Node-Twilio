var config = require('./config.json');
var arpListener = require('arp-listener');
var request = require('request');
// Change the interface to whatever you are listening on - currently wlan0
arpListener('wlan0', function(arpData) { 

  if (arpData.sender_ha == config.pushMAC) {
  	console.log('pushed');
  	request.post({
      url: 'http://maker.ifttt.com/trigger/gillette.dash_button/with/key/' + config.iftttkeys 
    }, function(error, response, body) {
      console.log(body);
      console.log('Error was ', error);
    });

  } 
	else if (arpData.sender_ha == config.defaultMAC) {
		console.log('Sleepy Time');
	}
})

