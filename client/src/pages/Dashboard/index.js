import React from "react";
import API from "../../utils/API";
import "./style.css";
import YourEvents from '../../components/YourEvents';
import YourInvitations from '../../components/YourInvitations';


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

  const checkLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
  };

  return (

    <div className="container">
      <div className='row'>
        <div className="col-lg-12 header-column">
          <h2 className="welcome-header">Welcome to</h2>
          <h1 className="brand-header">Nights-In</h1>
        </div>
      </div>
      <div className='row'>
        <div className="col-lg-1"></div>
          <YourInvitations/>
          <YourEvents/>
      </div>
      <br></br>
      <div className='row'>
        <div className="col-lg-4"></div>
  
          <button className="btn btn-success" onClick={handleInvite}>Invite</button>
          <button className="btn btn-danger" onClick={checkAuth}>Check Authentication</button>
          <button className="btn btn-primary" onClick={checkLocalStorage}>Check Local Storage</button>

      </div>
      
    </div>
  );
}

export default Dashboard;
