import React, {useState, useContext } from "react";
import API from "../../utils/API";
import LoggedInContext from "../../utils/LoggedInContext";
import "./Dashboard.css";
import YourEvents from "../../components/YourEvents";
import YourInvitations from "../../components/YourInvitations";
import LogInBox from "../../components/LogInBox";

function Dashboard() {
  const userInfo = useContext(LoggedInContext);
  const [invites, setInvites] = useState([])
  const [formObject, setFormObject] = useState({})


  const handleInvite = () => {
    const data = {
      subject: "Testing Query",
      name: "JPG",
      email: "gracejohnpaul200@gmail.com",
      body:
        "This should pass all the necessary email info from front-end to back-end.",
    };

    API.sendInvite(data);
  };

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
          <div className="col-lg-1"></div>

          <div className="col-lg-5 orange-border">
            <h3>Your Invitations</h3>
            <div className="eventlist">
            <ul class="list-group">
              <li class="list-group-item invitelist">Kelly Invited You to a Nights-In on 08/12/21</li>
              <li class="list-group-item list-group-item-warning invitelist">Mark Invited You to a Nights-In on 08/12/21</li>
              <li class="list-group-item invitelist">Adam Invited You to a Nights-In on 08/12/21</li>
              <li class="list-group-item list-group-item-warning invitelist">Sandra Invited You to a Nights-In on 08/12/21</li>
              <li class="list-group-item invitelist">Hannah Invited You to a Nights-In on 08/12/21</li>
              <li class="list-group-item list-group-item-warning invitelist">Jake Invited You to a Nights-In on 08/12/21</li>
              <li class="list-group-item">Lauren Invited You to a Nights-In on 08/12/21</li>
            </ul>
            </div>
          </div>

          <div className="col-lg-5 orange-border">
            <h3>Events Your Hosting</h3>
            <div className="eventlist">
              <ul class="list-group">
                <li class="list-group-item list-group-item-warning invitelist">You are hosting a Nights-In on 8/24/21</li>
                <li class="list-group-item invitelist">You are hosting a Nights-In on 8/24/21</li>
                <li class="list-group-item list-group-item-warning invitelist">You are hosting a Nights-In on 8/24/21</li>
                <li class="list-group-item invitelist">You are hosting a Nights-In on 8/24/21</li>
                <li class="list-group-item list-group-item-warning invitelist">You are hosting a Nights-In on 8/24/21</li>
              </ul>

            </div>
          </div>
        </div>
      ) : (
        <LogInBox />
      )}
    </div>
  );
}

export default Dashboard;
