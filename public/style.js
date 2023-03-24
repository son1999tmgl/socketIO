var socket = io("http://localhost:3000")
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

});