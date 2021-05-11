import React, { useState, useEffect, useContext } from "react";
import LoggedInContext from "../utils/LoggedInContext";
import API from "../utils/API";

function Profile() {
  const userInfo = useContext(LoggedInContext);

  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  });

  const handleProfile = () => {
    API.getUser(userInfo.id)
      .then(({ data }) => {
        console.log(data);
        setUserState({
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          email: data.email,
          password: data.id
        });
      });
  };

  useEffect(() => {
    handleProfile();
  }, []);


  return (
    <div class="container pt-5">
      {/* Card Header */}
      <div className="card border border-dark">
        <div className="card-header text-center bg-warning">
          <h2>Update Profile</h2>
        </div>

        {/* Welcome */}
        <div className="userId text-center">
          <h3>
            Welcome, {userState.firstName}
          </h3>
          <h5 id="user-number" data-useremail={userState.email}>
            Email: {userState.email}
          </h5>
        </div>

        <h3 id="update-err-msg"></h3>

        <form id="user-form">
          {/* First & Last Name */}
          <div className="form-row p-2">
            <div className="form-group col-md-6">
              <label for="inputFirst">First Name</label>
              <input
                type="text"
                class="form-control"
                id="inputFirst"
                value={userState.firstName}
                placeholder="John"
              ></input>
            </div>

            <div className="form-group col-md-6">
              <label for="inputLast">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="inputLast"
                value={userState.lastName}
                placeholder="Doe"
              ></input>
            </div>
          </div>

          {/* Email & Password */}
          <div className="form-row p-2">
            <div className="form-group col-md-6">
              <label for="inputPassword">Email</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail"
                value={userState.email}
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                value={userState.password}
              ></input>
            </div>
          </div>

          {/* Buttons */}
          <div className="text-center pb-4">
            <button
              type="submit"
              id="update-user"
              data-id="{{userInfo.id}}"
              className="btn btn-primary mr-3"
            >
              Update
            </button>
            <button
              type="submit"
              id="delete-user"
              className="btn btn-primary mr-3"
            >
              Delete
            </button>
            <button
              type="submit"
              id="view-user"
              data-id="{{userInfo.id}}"
              className="btn btn-primary"
            >
              Refresh
            </button>
          </div>
        </form>

        <div
          className="modal"
          id="delete-user-modal"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Re-Enter Credentials to delete user
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <h3>Sign In:</h3>
                <form>
                  <div className="form-group">
                    <label for="userEmail">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="userEmail"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="userPassword">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="userPassword"
                    ></input>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  id="confirm-delete"
                  type="button"
                  data-id="{{userInfo.id}}"
                  className="btn btn-primary"
                >
                  Confirm Delete
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Nah I'll stay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
