import React, { useContext } from "react";
import LoggedInContext from "../../utils/LoggedInContext";
import "./Dashboard.css";
import LogInBox from "../../components/LogInBox";
import ChatBox from "../../components/ChatBox";
import RoomSelect from "../../components/RoomSelect";

function Dashboard(props) {
  const userInfo = useContext(LoggedInContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 header-column">
          <h2 className="welcome-header">Welcome to</h2>
          <h1 className="brand-header">Nights-In</h1>
        </div>
      </div>
      {userInfo.loggedIn ? (
        <div className="row">
          <RoomSelect rooms={["Public", "Friends", "Joe"]} />
          <div className="col-lg-1" />
          <ChatBox roomId={props.match.params.roomId} />
        </div>
      ) : (
        <LogInBox />
      )}
    </div>
  );
}

export default Dashboard;
