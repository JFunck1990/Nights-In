import "./Invite.css";
import React, { useState } from "react";
import API from "../../utils/API";

function Invite() {
  const [formObject, setFormObject] = useState({});

  const handleInvite = () => {
    const data = {
      subject: "You've Been Invited to Nights In!",
      name: formObject.name,
      email: formObject.email,
      body: ` You're invited to trivia at Nights-In! On  ${formObject.date} at ${formObject.time}! Follow this link: https://nights-in.herokuapp.com/`,
    };

    API.sendInvite(data);
    alert("Invitation Sent!");
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
          <h2 className="headerFont">INVITE YOUR FRIENDS!</h2>
        </div>

        <div className="form-row mt-3 formMargin">
          <label className="labelFont" for="inputFriendsName">
            Friend's Name
          </label>
          <input
            className="form-control"
            placeholder="John Doe"
            id="inputFriendsName"
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-row mt-2 formMargin">
          <label className="labelFont" for="inputFriendEmail">
            Friend's Email
          </label>
          <input
            className="form-control"
            placeholder="example@email.com"
            id="inputFriendsEmail"
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-row mt-2 formMargin">
          <label className="labelFont" for="inputDate">
            Date
          </label>
          <input
            className="form-control"
            type="date"
            id="inputDate"
            name="date"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="form-row mt-2 formMargin">
          <label className="labelFont" for="inputTime">
            Time
          </label>
          <input
            className="form-control"
            type="time"
            id="inputTime"
            name="time"
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
