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
