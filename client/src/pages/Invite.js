import React from "react"
import API from "../utils/API";

function Invite() {
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

      <div>

      </div>

    );
}

export default Invite;