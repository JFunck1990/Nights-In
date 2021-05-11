import React, { useContext } from "react";
import API from "../../utils/API";
import LoggedInContext from "../../utils/LoggedInContext";
import "./Dashboard.css";
import YourEvents from '../../components/YourEvents';
import YourInvitations from '../../components/YourInvitations';
import LogInBox from "../../components/LogInBox";


function Dashboard() {
  const userInfo = useContext(LoggedInContext);

  const handleInvite = () => {
    const data = {
      subject: "Testing Query",
      name: "JPG",
      email: "gracejohnpaul200@gmail.com",
      body: "This should pass all the necessary email info from front-end to back-end."
    }

    API.sendInvite(data);
  };

  return (
    <div className="container">
      <div className='row'>
        <div className="col-lg-12 header-column">
          <h2 className="welcome-header">Welcome to</h2>
          <h1 className="brand-header">Nights-In</h1>
        </div>
      </div>
      {
        userInfo.loggedIn
        ?
          <div className='row'>
            <div className="col-lg-1"></div>
            <YourInvitations />
            <YourEvents />
          </div>
        :
          <LogInBox />
      }
      <br></br>
      <div className='row'>
        <div className="col-lg-4"></div>
        <button className="btn btn-success" onClick={handleInvite}>Invite</button>
      </div>
    </div>
  );
}

export default Dashboard;
