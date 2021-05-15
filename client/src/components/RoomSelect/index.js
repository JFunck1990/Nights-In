import React from "react";
import { Link } from "react-router-dom";

const ChatBox = ({ rooms }) => {
  return (
    <div className="col-lg-5 orange-border">
      <div className="room-select-container">
        <h1 className="room-select-header">Your Chat Rooms</h1>
        <div className="rooms-container">
          <ol className="rooms-list">
            {rooms.map((room, i) => (
              <li key={i}>
                <Link to={`/dashboard/${room}`}>{room}</Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;