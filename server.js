var app = require("express")();
var http = require("http").Server(app);
var io = require('socket.io')(http);

const PORT = 3001;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');

  socket.on("test", (data) => {
    console.log("A test event was fired, and here's the data: " + data);

  });
});

http.listen(PORT, function () {
  console.log(`listening on ${PORT}`);
});
