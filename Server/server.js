const socketController = require('../sockets/socketController');

module.exports = (server) => {
    const io = require('socket.io')(server);

    io.on('connection', (socket) => {
    socketController(socket);
    });

    
};
