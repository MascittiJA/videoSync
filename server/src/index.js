const { privateDecrypt } = require('crypto');
const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('../controller/socketController')(http);

app.set('port',process.env.PORT || 5000);

app.use(express.static(__dirname + '/../../client/build'));

http.listen(app.get('port'), () => {
  console.log('Listening on port: ', app.get('port'));
});