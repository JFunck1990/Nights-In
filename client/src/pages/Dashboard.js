import React from "react";
import API from "../utils/API";

function Dashboard() {
  const handleInvite = () => {
    API.sendInvite();
  };

  return (
    <div id="main-container" className="container">
      <div className="jumbotron text-center header-wrap" align="center">
        <p className="lead">Welcome to <strong>Sample App</strong></p>
        <hr className="my-4" />
        <div>
          <button className="btn btn-success" onClick={handleInvite}>Invite</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
