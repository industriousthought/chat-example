
  var socket = io(),
      nick;

  var message = require('./message.js');

  var login = require('./login.js');

  var connection = require('./connection.js');

  $('#login').submit(login.bind(undefined, nick, connection, socket));

  $('#message').submit(message.bind(undefined, nick, connection, socket));
