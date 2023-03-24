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
    socket.on("client-send-username", (userName) => {
        console.log("client-send-username: ", userName);
        if(listUsers.includes(userName)) {
            socket.emit("server-send-register-err")
        }else {
            listUsers.push(userName)
            socket.userName = userName
            socket.emit("server-send-register-success", userName)
            io.sockets.emit("server-send-list-user-online", listUsers)
        }
    })


    socket.on("client-send-logout", () => {
        listUsers.splice(listUsers.indexOf(socket.userName), 1)
        socket.emit("serve-send-logout")
        io.sockets.emit("server-send-list-user-online", listUsers)
    })

    socket.on("client-send-message", (message) => {
        io.sockets.emit("server-send-message", {userName: socket.userName, message: message})
    })
})

app.get("/", (req, res) => {
    res.render("trangChu");
})
