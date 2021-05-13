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
      body: ` You are invite to nights-In on  ${formObject.date} at ${formObject.time} locatet at: https://nights-in.herokuapp.com/`,
    };

    API.sendInvite(data);
    alert("message sent!");
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // function handleDateChage (event) {
  //   const { date, value } = event.target;
  //   setFormObject({ ...formObject, [date]: value });
  // }

  // function handleTimeChange (event) {
  //   const { time, value } = event.target;
  //   setFormObject({ ...formObject, [time]: value });
  // }


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
<<<<<<< HEAD

        <div className="text-center p-4">
          <button className="btn btn-primary btn-xl" onClick={handleInvite}>
            Click Here to Send Invite
          </button>
        </div>

=======
        <div className="form-row p-2">
          <input
            className="form-control"
            type="date"
            name="date"
            onChange={handleInputChange}
          ></input>
           <input
            className="form-control"
            type="time"
            name="time"
            onChange={handleInputChange}
          ></input>
        </div>
        <button className="btn btn-secondary" onClick={handleInvite}>
          Invite
        </button>
>>>>>>> cb9181b0328d8fc119c856df5942cf005ee90b47
      </div>
    </div>
  );
}

export default Invite;
