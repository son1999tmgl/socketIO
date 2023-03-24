var express = require('express');
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
var listUsers = []
io.on("connection", (socket) => {
    console.log("Có người kết nối: " + socket.id);
    socket.on("client-create-room", (nameRoom) => {
        socket.join(nameRoom)
        socket.room = nameRoom
        io.sockets.emit("server-send-list-room", Array.from(io.sockets.adapter.rooms.keys()))
        socket.emit("server-send-room-curren", nameRoom)
    })
})

app.get("/", (req, res) => {
    res.render("trangChu");
})
