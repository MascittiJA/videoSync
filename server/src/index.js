const { privateDecrypt } = require('crypto');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('port',process.env.PORT || 5000);

app.use(express.static(__dirname + '/../../client/build'));

let party = [];

io.on('connection', (socket) => {
    
    socket.on('disconnect', () => {
        console.log('Client left party: ', socket.id);
        party = party.filter(user => !(user.id === socket.id));
    });

    socket.on('pauseSRV', () => {
        console.log("SERVER - Pause: ", socket.id)
        io.emit('pause');
    });

    socket.on('playSRV', seekTime => {
        console.log("SERVER - Play: ", socket.id)
        io.emit('play', seekTime);
    });

    socket.on('seekSRV', seekTime => {
        console.log("SEEK", seekTime);
        io.emit('seek', seekTime);
        // socket.broadcast.emit('seek', seekTime);
    });

    console.log('Client add to party: ', socket.id);
    // if (party.length > 0) {
    //     party[0].sock.emit('current', socket);
    // }

    party.push({id: socket.id, sock: socket});

});


http.listen(app.get('port'), () => {
  console.log('Listening on port: ', app.get('port'));
});