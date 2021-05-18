import React, { useState } from "react";
import useChat from "../../utils/useChat";
import "./style.css";

const ChatBox = ({ roomId, username }) => {
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = useState({
    message: "",
    username: username
  });

  const [errorState, setErrorState] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage({
      ...newMessage,
      message: event.target.value
    });
  };

  const handleSendMessage = () => {
    if (newMessage.message === "") {
      setErrorState("*Message cannot be blank*");
    }
    else {
      setErrorState("");
      sendMessage(newMessage);
      setNewMessage({
        message: "",
        username: username
      });
    }
  };

  return (
    <div className="chat-room-container col-lg-6 orange-border text-left-align">
      <h1 className="room-name">Chat: {roomId}</h1>
      <div className="messages-container">
        <ul className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              <div>
                <span className="username">{message.username}:</span>
                <span className="message-body">{message.message}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="row">
        <label className="col-lg-12 text-center-align">Enter a message below</label>
      </div>

      <div className="chat-room-inputs row">
        <div className="col-lg-1" />
        <input
          value={newMessage.message}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          className="new-message-input-field form-control col-lg-8"
        />
        <button onClick={handleSendMessage} className="send-message-button btn btn-dark col-lg-2">
          Send
        </button>
      </div>
      <div className="row">
        <div className="error-msg col-lg-12">
          {errorState}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;