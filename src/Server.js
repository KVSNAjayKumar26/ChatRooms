const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io =socketIO(server);

io.on('connection', (socket) => {
    socket.on('join_room', (room) => {
        socket.join(room);
    });

    socket.on('send_message', (data) => {
        io.to(data.room).emit('receive_message', data);
    });
});

server.listen(5000, () => {
    console.log('Server is running on port 5000')
})

