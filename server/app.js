const express = require('express'); 
const parser = require('body-parser'); 
const app = express(); 
const EventEmitter = require('events'); 
const Stream = new EventEmitter();
app.use(parser.json()); 
app.use(parser.urlencoded({ extended: true, }));
app.get('/my-endpoint', function(request, response) {
    response.writeHead(200, { 
        'Content-Type': 'text/event-stream', 
        'Cache-Control': 'no-cache', 
        'Connection': 'keep-alive', 
    }); 
    Stream.on('push', function(event, data) { 
        response.write('event: ' + String(event) + '\n' + 'data: ' + JSON.stringify(data) + '\n\n');
    });
});
setInterval(function () { 
    Stream.emit('push', 'message', { msg: 'it works!' });
}, 10000);

app.listen(3000);
console.log('Express E2E mock server is running');