import React, { useState } from "react";
import API from "../../utils/API";
import "./Invite.css";

function Invite() {
  const [formObject, setFormObject] = useState({});

  const handleInvite = () => {
    const data = {
      subject: "Invited to Nights In!",
      name: formObject.name,
      email: formObject.email,
      body: "You are invited to Nights In",
    };

    API.sendInvite(data);
    alert("message sent!");
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  return (
    <div className="container margintop">
      <div className="card border border-dark radius">

        <div className="card-header text-center bg-header" id="radiushead">
          <p className="headerFont">INVITE YOUR FRIENDS!</p>
        </div>
        
        <div className="form-row mt-3 formMargin">
          <label className="labelFont" for="inputFriendsName">Friend's Name</label>
          <input
            className="form-control"
            placeholder="John Doe"
            id="inputFriendsName"
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-row mt-2 formMargin">
        <label className="labelFont" for="inputFriendEmail">Friend's Email</label>
          <input
            className="form-control"
            placeholder="example@email.com"
            id="inputFriendsEmail"
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="text-center p-4">
          <button className="btn btn-primary btn-xl" onClick={handleInvite}>
            Click Here to Send Invite
          </button>
        </div>

      </div>
    </div>
  );
}

export default Invite;
