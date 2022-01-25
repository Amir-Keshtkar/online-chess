<<<<<<< HEAD
=======
import React, { useState, useEffect } from "react";

>>>>>>> connection
var socket = io.connect("http://localhost:3000");

var room = document.getElementById("room");
var feedback = document.getElementById("feedback");
var user = document.getElementById("user");
var message = document.getElementById("message");
var send = document.getElementById("send");

<<<<<<< HEAD
=======
/*const [response, setResponse] = useState("");
useEffect(() => {

}, []);*/

>>>>>>> connection
send.addEventListener("click", function () {
  if (!user.value) {
    alert("Please enter a username first.");
    return;
  }
  if (!message.value) {
    return;
  }
  socket.emit("CHAT", {
    user: user.value,
    message: message.value,
  });
});

socket.on("CHAT", function (data) {
  room.innerHTML +=
    "<p><strong>" + data.user + ":</strong> " + data.message + "</p>";
  feedback.style.visibility = "hidden";
});

message.addEventListener("keypress", function () {
  if (!user.value) {
    alert("Please enter a username first.");
    return;
  }
  socket.emit("TYPING", { user: user.value });
});

socket.on("TYPING", function (data) {
  feedback.innerHTML = "<i>" + data.user + " is typing ...</i>";
  feedback.style.visibility = "visible";
});
