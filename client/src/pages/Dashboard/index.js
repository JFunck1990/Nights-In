import React, { useContext, useEffect, useState } from "react";
import LoggedInContext from "../../utils/LoggedInContext";
import API from "../../utils/API";
import "./Dashboard.css";
import ChatBox from "../../components/ChatBox";
import RoomSelect from "../../components/RoomSelect";

function Dashboard(props) {
  const userInfo = useContext(LoggedInContext);
  const [roomsState, setRoomsState] = useState([]);

  useEffect(() => {
    API.updateChatRooms(userInfo);
    
    if (userInfo.chatRooms) {
      const rooms = userInfo.chatRooms.split("|");
      setRoomsState(rooms);
    }
  }, [userInfo]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 header-column">
          <h2 className="welcome-header">Welcome to</h2>
          <h1 className="brand-header">Nights-In</h1>
        </div>
      </div>
      <div className="row">
        <RoomSelect
          rooms={roomsState}
          setRooms={(newRoom) => {
            userInfo.changeContext("chatRooms", userInfo.chatRooms + newRoom, userInfo);
          }}
        />
        <div className="col-lg-1" />
        <ChatBox
          roomId={props.match.params.roomId}
          username={userInfo.username}
        />
      </div>
    </div>
  );
}

export default Dashboard;
