
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

