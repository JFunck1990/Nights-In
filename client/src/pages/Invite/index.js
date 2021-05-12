import React, { useState } from "react";
import API from "../../utils/API";

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
        <button className="btn btn-secondary" onClick={handleInvite}>
          Invite
        </button>
      </div>
    </div>
  );
}

export default Invite;
