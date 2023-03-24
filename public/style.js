var socket = io("http://localhost:3000")
$(document).ready(function(){
    $("#loginForm").show()
    $("#chatForm").hide()
    $("#btnRegister").click(function(){
        socket.emit("client-send-username", $("#txtUsername").val())
    })

    socket.on("server-send-register-err", () => {
        alert("Tên người dùng đã được sử dụng.")
    })

    socket.on("server-send-register-success", (data) => {
        $("#loginForm").hide()
        $("#chatForm").show()
        $("#userName").html(data)
    })

    socket.on("server-send-list-user-online", (listUser) => {
        var domListUser = $("#boxContent")
        domListUser.html("")
        
        listUser.forEach(userName => {
            domListUser.append("<div class='userOnline'>"+userName+"</div>")
        });
    })

    socket.on("serve-send-logout", ()=>{
        alert("Logout thanh cong")
        $("#loginForm").show()
        $("#chatForm").hide()
    })


    $("#btnLogout").click(() => {
        socket.emit("client-send-logout")
    })

    $("#btnSendMessage").click(() => {
        socket.emit("client-send-message", $("#txtMessage").val())
        $("#txtMessage").val("")
    })

    var listMessage = $("#listMessages")
    socket.on("server-send-message", (data) => {
        listMessage.append("<div>"+data.userName+": "+data.message+"</div>")
    })

});