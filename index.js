const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const http = require("http");
const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: true,
  origins: ["http://localhost:3000"],
});

const router = require("./router");

app.use(router);

io.on("connection", (socket) => {
  console.log("User just connected");

  socket.on("disconnect", ({ name, room }) => {
    console.log(`A User just disconnected from room`);
  });

  socket.on("join", ({ name, room }, callback) => {});
});

server.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
