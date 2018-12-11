function main() {
    var socket = io();
    var chatDiv = document.getElementById("chat");
    var input = document.getElementById("message");
    var button = document.getElementById("submit");

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            console.log("fhdfh");
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        console.log("fdg");
        var p = document.createElement("p");
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on("display message", handleMessage);
}
window.onload = main;


