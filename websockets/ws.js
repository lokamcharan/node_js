


// const express=require('express')

// const WebSocket = require('ws');

// const app=express();

// const port=8080;

// const server=app.listen(port,()=>{
//     console.log("server is listening")
// })


// const wss=new WebSocketServer({server})

// wss.on("connection",(ws)=>{
//     ws.on("message",(data)=>{
//         console.log("data from client",data);
//         ws.send("thanks buddy!")
//     })
// })


const express = require('express');
const WebSocket = require('ws');
const app = express();
const port = 8080;

// Set up the HTTP server
const server = app.listen(port, () => {
    console.log('Server is listening on port', port);
});

// Create a WebSocket server that uses the HTTP server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('A new client connected');
    
    // Listen for messages from the client
    ws.on('message', (data) => {
        console.log('Data from client:', data);
        
        // Send a message back to the client
        ws.send('Thanks buddy!');
    });
    
    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Add HTTP route for checking WebSocket connection
app.get('/test', (req, res) => {
    res.send('WebSocket server is running, try connecting!');
});

console.log('WebSocket server is running on ws://localhost:8080');

