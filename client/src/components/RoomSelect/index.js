import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChatBox = ({ rooms, setRooms }) => {
  const [newRoom, setNewRoom] = useState("");
  const [errorState, setErrorState] = useState("");

  const handleSubmit = () => {
    if (newRoom.length === 0) {
      setErrorState("*Please enter a room name first*");
    }
    else if (newRoom.indexOf("|") > -1) {
      setErrorState("*Room name cannot contain \"|\"*");
    }
    else {
      setErrorState("");
      setRooms("|" + newRoom);
    }
  }

  return (
    <div className="col-lg-5 orange-border">
      <div className="room-select-container">
        <h1 className="room-select-header">Your Chat Rooms</h1>

        <div className="row">
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
        
        <label>Add a new room</label>

        <div className="row">
          <div className="col-lg-1" />
          <input
            value={newRoom}
            onChange={(event) => setNewRoom(event.target.value)}
            placeholder="New room name"
            className="form-control col-lg-7"
          />
          <button
            className="btn btn-primary col-lg-3"
            onClick={handleSubmit}
          >
          Submit
          </button>
        </div>

        <span>{errorState}</span>
      </div>
    </div>
  );
};

export default ChatBox;