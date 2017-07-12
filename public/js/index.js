var socket = io();// got this from above js file

socket.on('connect', function () {
    console.log('connected to server');

    socket.emit('createEmail', {
        to: "niks@gmail.com",
        text:"Hello"
    });

    socket.emit('createMessage',{
        from: 'Nikhil',
        text: 'Yup, that works for me'
    });
});

socket.on('newEmail', function(email){
    console.log('New Email');
    console.log(email);
});

socket.on('newMessage', function(message){
    console.log('New message', message);
});

socket.on('disconnect', function () {
    console.log('disconnected from server');
});