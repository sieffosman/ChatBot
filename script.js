// Simple chatbot responses
const responses = {
    "hello": "Hello! How can I help you?",
    "how are you": "I'm just a chatbot, but thanks for asking!",
    "goodbye": "Goodbye! Have a great day!"
  };
  
  // Function to get the chat input and display responses
  function handleChat() {
    const userInput = document.getElementById("userInput").value.trim();
    const chatArea = document.getElementById("chat");
  
    if (userInput === "") {
      return;
    }
  
    // Display user's message
    chatArea.innerHTML += `<p class="user-message">You: ${userInput}</p>`;
  
    // Get bot's response
    const botResponse = responses[userInput.toLowerCase()] || "I'm sorry, I don't understand.";
  
    // Display bot's response
    chatArea.innerHTML += `<p class="bot-message">Bot: ${botResponse}</p>`;
  
    // Clear input field
    document.getElementById("userInput").value = "";
  
    // Scroll to the bottom of the chat
    chatArea.scrollTop = chatArea.scrollHeight;
  }
  
  // Add event listener to the "Send" button
  document.getElementById("sendBtn").addEventListener("click", handleChat);
  
  // Allow pressing Enter key to send message
  document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      handleChat();
    }
  });
  