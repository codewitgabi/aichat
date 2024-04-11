//  response logic
import {
 KEY
} from "./Key.js";
import {
 GoogleGenerativeAI
} from "@google/generative-ai";
import {
 chatMessage
} from "./main.js";

const messageDiv = document.getElementById("chat-message-list");

const genAI = new GoogleGenerativeAI(KEY);

export async function airesponse() {
 // For text-only input, use the gemini-pro model
 const model = genAI.getGenerativeModel({
  model: "gemini-pro"
 });


 const prompt = chatMessage;
 const result = await model.generateContent(prompt);
 const response = await result.response;
 const text = response.text();

 let newDiv = document.createElement("div");
 newDiv.setAttribute("class", "chat-response");
 newDiv.innerHTML = '<i class="bi bi-person-circle"></i><div class="chat-message">' + text + '</div>';
 messageDiv.appendChild(newDiv);

}