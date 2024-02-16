async function main() {
    const DMX = require('dmx-ts');
    const config = require('./config');


    var dmx = new DMX.DMX()

    var driver = new DMX.EnttecOpenUSBDMXDriver(config.path, { dmxSpeed: 30 });

    var uni = await dmx.addUniverse('bttm', driver)

const { Server } = require("socket.io");
const express = require("express");
const { createServer } = require("http");


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

  socket.on("set", (val) => {
    var ch = val[0];
    var va = val[1];

    var r = {};
    r[ch] = va;

    uni.update(r)
  });
});

server.listen(config.port, () => {
  console.log("server running at http://localhost:" + config.port);
});
}
main();