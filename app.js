const express = require("express");
const http = require("http");
const socketio = require("socket.io");


const port = process.env.PORT || 3000;

const app = express();


app.use(express.static("../online-chess/client"));
//app.use('../online-chess/src/', index.js);

const server = http.createServer(app);

const io = socketio(server);



io.on("connection", (socket) => {
  console.log("Connection established:", socket.id);
  socket.on("CHAT", (data) => {
    io.sockets.emit("CHAT", data);
  });
  socket.on("TYPING", (data) => {
    socket.broadcast.emit("TYPING", data);
  });
});

//person who listen
server.listen(port, () => {
  console.log("Listening on port 3000...");
});
