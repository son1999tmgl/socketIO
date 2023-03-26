var socket = io("https://sonngong.herokuapp.com/")
$(document).ready(function(){
    $("#btnCreateRoom").click(() => {
        socket.emit("client-create-room", $("#textCreateRoom").val())
    })

    socket.on("server-send-list-room", (listRoom) => {
        console.log(listRoom)
        var wrapperListRoom = $("#wrapperListRoom")
        wrapperListRoom.html("")
        listRoom.forEach(room => {
            wrapperListRoom.append("<div>"+room+"</div>")
        });
    })

    socket.on("server-send-room-curren", (name) => {
        $("#roomCurrent").html(name)
    })

    $("#btnSendMessage").click(() => {
        socket.emit("client-send-message-room", $("#textSendMessage").val())
    })

    socket.on("server-send-message-room", (message) => {
        console.log("message: ", message);
        $("#textSendMessage").val("")
        $("#listMessages").append("<div>"+message+"</div>")
    })

});