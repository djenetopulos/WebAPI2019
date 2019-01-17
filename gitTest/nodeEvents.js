var events = require('events');
var eventEmitter = new events.EventEmitter();

var message = function(){
    console.log("You fired off an event!!?!1!");
}

eventEmitter.on("evnt", message);


module.exports.nodeEvents = function(){
    eventEmitter.emit('evnt');
}

//eventEmitter.emit('evnt');