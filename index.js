const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();

app.listen();

const server = http.createServer(app);
const io = socketio(server);
const router = require("./router");

const PORT = process.env.PORT || 8080;

app.use(router);

io.on("connection", (socket) => {
  console.log("User just connected");
  socket.on("disconnect", () => {
    console.log("User just disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
