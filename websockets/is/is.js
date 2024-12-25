const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);  // Initialize Socket.IO with HTTP server

const port = 8080;

// Serve a simple HTTP route for testing
app.get('/', (req, res) => {
    res.send('Socket.IO server is running');
});

// Listen for incoming Socket.IO connections
io.on('connection', (socket) => {
    console.log('A new client connected');

    // Listen for messages from the client
    socket.on('message', (data) => {
        console.log('Received from client:', data);
        socket.emit('message', 'Hello, Client!');
    });

    // Handle client disconnection
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Socket.IO server is running on http://localhost:${port}`);
});
