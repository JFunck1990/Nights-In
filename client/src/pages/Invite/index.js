import React from "react";
import API from "../../utils/API";
import './Invite.css';

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

  const handleFormSubmit = (event) => {
    Invite();
    

  }

  return (
    <div className="container">      
      <br></br>

      <div className='row'>
        <div className='col-lg-2'></div>
        <div className="col-lg-8" id="invitebox">
          <div className="glowbox"></div>
          <h3 className="inviteheader">Invite Your Friends</h3>
          
          <form class="form-inline">
            <div class="form-group mb-2">
              <label for="staticEmail2" class="sr-only">Email</label>
              <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" class="sr-only">Password</label>
              <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
          </form>
        </div>
      </div>

      <div className='row'>
        <div className="col-lg-5"></div>
        <button className="btn btn-success" onClick={handleInvite}>Invite</button>
      </div>
    </div>

    );
}

export default Invite;