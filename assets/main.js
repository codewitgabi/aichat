// message field logic
const inputForm = document.getElementById("chat-form");

import { airesponse } from "./gemini.js";

let chatMessage = "";

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const textInput = document.getElementById("chat-message");

  const messageDiv = document.getElementById("chat-message-list");
  messageDiv.scrollTop = messageDiv.scrollHeight;

  let message = textInput.value;
  chatMessage = message;
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "chat-response");
  newDiv.innerHTML =
    '<i class="bi bi-person-circle"></i><div class="chat-message">' +
    message +
    "</div>";
  messageDiv.appendChild(newDiv);
  textInput.value = "";
  airesponse();
});

export { chatMessage };
