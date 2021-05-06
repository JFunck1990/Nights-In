import React from "react";
import API from "../utils/API";

function Dashboard() {
  const handleInvite = () => {
    const data = {
      subject: "Testing Query",
      name: "JPG",
      email: "gracejohnpaul200@gmail.com",
      body: "This should pass all the necessary email info from front-end to back-end."
    }

    API.sendInvite(data);
  };

  const checkAuth = () => {
    API.checkAuthentication()
      .then(res => console.log(res));
  };

  return (
    <div id="main-container" className="container">
      <div className="jumbotron text-center header-wrap" align="center">
        <p className="lead">Welcome to <strong>Sample App</strong></p>
        <hr className="my-4" />
        <div>
          <button className="btn btn-success" onClick={handleInvite}>Invite</button>
          <button className="btn btn-danger" onClick={checkAuth}>Check Authentication</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
