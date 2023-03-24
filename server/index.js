var express = require('express')
var app = express();
app.use(express.static("./public"))
app.set('view engine', 'ejs')
app.set('viewss','./views')


var server = require("http").Server(app);

var io = require('socket.io')(server)
server.listen(3000)


io.on('connection', (socket) => {
    console.log("Co ng ket noi" + socket.id);
    socket.on('disconnect', () => {
        console.log(socket.id + " ngat ket noi")
    })
    socket.on("Client-send-data", (data) => {
        // gui lại tat ca client(ke ca chinh no)
        io.sockets.emit("Server-send-data", data + "123")
        
        // Gửi lại cho chinh socket do
        socket.emit("Server-send-data-me", data+ "234")

        //Gửi cho tất cả(trừ chính nó)
        socket.broadcast.emit("Server-send-data-other", data + "456")
    })
})


app.get("/", (req, res) => {
    res.render('trangChu')
})