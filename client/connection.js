
module.exports = function(name, msg, socket) {

    return new Promise(function(resolve, reject) {

            socket.emit(name, msg);

            resolve('Socket message delivered.');

            });

};


