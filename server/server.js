const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

//configuring socket io
var app = express();
var server = http.createServer(app); // http.createServer((req,res)=>{})
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail',{
        from: "abc@xyz.com",
        text: "Hey",
        createAt: "123"
    });

    socket.emit('newMessage',{
        from: 'Serve',
        text: 'Yup',
        createAt: 11212
    })

    socket.on('createEmail', (newEmail) => {
        console.log('create Email', newEmail);
    });

    socket.on('createMessage', (message)=>{
        console.log('createMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});



server.listen(port, () => {             //app.listen
    console.log(`Server is up on port ${port}`);
});