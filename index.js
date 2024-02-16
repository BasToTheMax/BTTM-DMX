const { Server } = require("socket.io");
const express = require("express");
const { createServer } = require("http");

const config = require('./config');

const app = express();
const server = createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/video/:id", (req, res) => {
  res.sendFile("./video.html", { root: __dirname });
});

app.get("/json/:id", (req, res) => {
    res.sendFile("./dmx/"+req.params.id+".json", { root: __dirname });
  });

io.on("connection", (socket) => {
  console.log("> Connected");

  socket.on("fout", () => {
    io.emit("fout");
  });
  socket.on('ok', () => {
    io.emit('ok');
  });
  socket.on('reset', () => {
    io.emit('reset');
  });
});

server.listen(config.port, () => {
  console.log("server running at http://localhost:" + config.port);
});