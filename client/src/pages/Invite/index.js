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
    <div className="container pt-5">
      <div className="card-header text-center bg-warning">
        <h2>Invite your friends!</h2>
      </div>
      <div className="card border border-dark">
        <div className="form-row p-2">
          <input
            className="form-control"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-row p-2">
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>
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
      </div>
    </div>
  );
}

export default Invite;
