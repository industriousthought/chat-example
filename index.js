var app = require('express')();

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/client/bundle.js', function(req, res){
        res.sendFile('/home/industriousthought/Web/chat-example/client/bundle.js');

        });

app.get('/', function(req, res){

        res.sendFile('/home/industriousthought/Web/chat-example/index.html');

        });

io.on('connection', function(socket){

        console.log('a user connected');
        socket.on('disconnect', function(){

            console.log('user disconnected');

        });
    });

io.on('connection', function(socket){

        socket.on('login', function(msg){
            io.emit('chat message', msg + ' logged in');
            console.log(msg + ' logged in');
        });

        socket.on('chat message', function(msg){

            io.emit('chat message', msg);

        });

    });

http.listen(3000, function(){

        console.log('listening on *:3000');

    });
