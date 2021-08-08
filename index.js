const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();

app.listen();

const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
