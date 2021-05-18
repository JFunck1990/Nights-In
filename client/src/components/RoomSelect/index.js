import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const RoomSelect = ({ rooms, setRooms }) => {
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
      setNewRoom("");
      setErrorState("");
      setRooms("|" + newRoom);
    }
  }

  return (
    <div className="room-select-container col-lg-5 orange-border">
      <h1 className="room-select-header">Your Chat Rooms</h1>

      <div>
        <div className="rooms-container">
          <ul className="rooms-list">
            {rooms.map((room, i) => (
              <li key={i}>
                <Link to={`/dashboard/${room}`}>{room}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <label>Add a new room</label>

      <div className="row room-select-inputs">
        <div className="col-lg-1" />
        <input
          value={newRoom}
          onChange={(event) => setNewRoom(event.target.value)}
          placeholder="New room name"
          className="form-control col-lg-7"
        />
        <button
          className="btn btn-dark col-lg-3"
          onClick={handleSubmit}
        >
        Submit
        </button>
      </div>

      <span>{errorState}</span>
    </div>
  );
};

export default RoomSelect;