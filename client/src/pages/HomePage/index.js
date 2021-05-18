import React from "react";
import "./Dashboard.css";
import LogInBox from "../../components/LogInBox";

function Dashboard(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 header-column">
          <h2 className="welcome-header">Welcome to</h2>
          <h1 className="brand-header">Nights-In</h1>
        </div>
      </div>
      <LogInBox />
    </div>
  );
}

export default Dashboard;
