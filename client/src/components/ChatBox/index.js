import React from "react";
import useChat from "../../utils/useChat";

const ChatBox = ({ roomId }) => {
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log("Sending message from chat box");
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="row">
      <div className="col-lg-1" />

      <div className="col-lg-5 orange-border">
        <div className="chat-room-container">
          <h1 className="room-name">Room: {roomId}</h1>
          <div className="messages-container">
            <ol className="messages-list">
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser ? "my-message" : "received-message"
                  }`}
                >
                  {message.body}
                </li>
              ))}
            </ol>
          </div>
          <textarea
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write message..."
            className="new-message-input-field"
          />
          <button onClick={handleSendMessage} className="send-message-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;