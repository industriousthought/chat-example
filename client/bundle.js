(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

  var socket = io(),
      nick;

  var message = require('./message.js');

  var login = require('./login.js');

  var connection = require('./connection.js');

  $('#login').submit(login.bind(undefined, nick, connection, socket));

  $('#message').submit(message.bind(undefined, nick, connection, socket));

},{"./connection.js":2,"./login.js":3,"./message.js":4}],2:[function(require,module,exports){

module.exports = function(name, msg, socket) {

    return new Promise(function(resolve, reject) {

            socket.emit(name, msg);

            resolve('Socket message delivered.');

            });

};



},{}],3:[function(require,module,exports){
module.exports = function(nick, connection, socket) {

    nick = $('#l').val();

    connection('login', nick, socket).then(function(response) {

            console.log('Loggin sent', response);

            }).then(function(response) {

                $('#login').fadeOut();

                }, function(error) {

                console.error('Loggin failed', error);
            });


    socket.on('chat message', function(msg){

            $('#messages').append($('<li>').text(msg));

            });

    return false;
};

},{}],4:[function(require,module,exports){

module.exports = function(nick, connection, socket) {
    var msg = nick + ": " + $('#m').val();

    connection('chat message', msg, socket).then(function(response) {

            $('#m').val('');
            console.log('Chat message sent.', response);

            }, function(error) {

            console.error('Chat message not sent!', error);

            });
    return false;
};


},{}]},{},[1]);
