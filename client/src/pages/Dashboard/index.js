import React, {useState, useContext } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import LoggedInContext from "../../utils/LoggedInContext";
import "./Dashboard.css";
import LogInBox from "../../components/LogInBox";
import ChatBox from "../../components/ChatBox";

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
        // <ChatBox roomId={props.match.params.roomId} />
        props.match.params.roomId ? 
          (<ChatBox roomId={props.match.params.roomId} />)
        :
          (<>
            <div style={{ color: "white" }}>Logged in but not in a room</div>
            <Link to="/dashboard/abc" style={{ backgroundColor: "white" }}>Enter room: abc</Link>
          </>)
      ) : (
        <LogInBox />
      )}
    </div>
  );
}

export default Dashboard;
