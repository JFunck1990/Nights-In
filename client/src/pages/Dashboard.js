import React from "react";
import API from "../utils/API";

function Dashboard() {
  const handleInvite = () => {
    const data = {
      subject: "Testing Query",
      name: "JPG",
      email: "jackfunck15@gmail.com",
      body: "This should pass all the necessary email info from front-end to back-end."
    }

    API.sendInvite(data);
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
