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
        console.log("data:  ", data);
    })
})


app.get("/", (req, res) => {
    res.render('trangChu')
})