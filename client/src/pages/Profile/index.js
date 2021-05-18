import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import LoggedInContext from "../../utils/LoggedInContext";
import API from "../../utils/API";
import FormInput from "../../components/FormInput";
import ModalComp from "../../components/ModalComp";
import './Profile.css';

function Profile({ setLoggedInState }) {
  const history = useHistory();
  const userInfo = useContext(LoggedInContext);

  const [userState, setUserState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: ""
  });

  const [newInfoState, setNewInfoState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    newPassword: ""
  });

  const [modalState, setModalState] = useState({
    show: false,
    type: "",
    currentPassword: ""
  });

  const [errorState, setErrorState] = useState("");

  const handleProfile = () => {
    API.getUser(userInfo.id)
      .then(({ data }) => {
        setUserState({
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          email: data.email
        });
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    if (newInfoState.firstName.length === 0
      || newInfoState.lastName.length === 0
      || newInfoState.username.length === 0
      || newInfoState.email.length === 0)
    {
      setErrorState("*Please fill out all fields*");
    }
    else if (newInfoState.firstName === userState.firstName
      && newInfoState.lastName === userState.lastName
      && newInfoState.username === userState.username
      && newInfoState.email === userState.email
      && newInfoState.newPassword === "")
    {
      setErrorState("*Change at least one field*");
    }
    else {
      setErrorState("");

      setModalState({
        show: true,
        type: "update",
        currentPassword: ""
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewInfoState({ ...newInfoState, [name]: value });
  };

  const handleSubmit = () => {
    if (modalState.type === "update") {
      API.updateUser({
        id: userInfo.id,
        firstName: newInfoState.firstName,
        lastName: newInfoState.lastName,
        username: newInfoState.username,
        email: newInfoState.email,
        currentPassword: modalState.currentPassword,
        newPassword: newInfoState.newPassword
      })
        .then((response) => {
          if (response.data) {
            setErrorState("");
            handleProfile();
          }
          else {
            setErrorState("*That password was incorrect*");
          }
        });
    }
    else if (modalState.type === "delete") {
      API.deleteUser({
        id: userInfo.id,
        password: modalState.currentPassword
      })
        .then((response) => {
          if (response.data) {
            setErrorState("");
            setLoggedInState({ loggedIn: false, id: -1, username: "" });
            history.push("/");
          }
          else {
            setErrorState("*That password was incorrect*");
          }
        });
    }
  }

  useEffect(() => {
    handleProfile();
  }, []);

  useEffect(() => {
    setNewInfoState({
      firstName: userState.firstName,
      lastName: userState.lastName,
      username: userState.username,
      email: userState.email,
      newPassword: ""
    });

    if (userState.username !== userInfo.username) {
      setLoggedInState({ ...userInfo, username: userState.username });
    }
  }, [userState]);

  return (
    <div class="container profilecontain">
        <h2 style={{fontStyle: "italic"}} className="profileheader">Update Profile</h2>

      {/* Card Header */}
      <div className="insidecontain">
        {/* <div className="card-header text-center bg-warning"> */}
        {/* </div> */}

        {/* Welcome */}
        <div className="userId text-center">
          <h3>
            Welcome, {userState.firstName + " " + userState.lastName}
          </h3>
          <h5 id="user-number">
            Username: {userState.username}
          </h5>
          <h5 id="user-number">
            Email: {userState.email}
          </h5>
        </div>

        <h3 className="text-center" style={{ color: "red" }}>{errorState}</h3>

        <form id="user-form">
          {/* First & Last Name */}
          <div className="form-row p-2">
            <FormInput
              id="inputFirst"
              colSize="6"
              label="First Name"
              name="firstName"
              value={newInfoState.firstName}
              handler={handleInputChange}
            />

            <FormInput
              id="inputLast"
              colSize="6"
              label="Last Name"
              name="lastName"
              value={newInfoState.lastName}
              handler={handleInputChange}
            />
          </div>

          {/* Username & Email */}
          <div className="form-row p-2">
            <FormInput
              id="inputUsername"
              colSize="6"
              label="Username"
              name="username"
              value={newInfoState.username}
              handler={handleInputChange}
            />

            <FormInput
              id="inputEmail"
              colSize="6"
              label="Email"
              name="email"
              value={newInfoState.email}
              handler={handleInputChange}
            />
          </div>

          <hr/>

          <div className="form-row p-2">
            <FormInput
              id="inputPassword"
              colSize="12"
              label="New Password (optional)"
              name="newPassword"
              value={newInfoState.newPassword}
              handler={handleInputChange}
            />
          </div>

          {/* Buttons */}
          <div className="text-center pb-4">
            <button
              type="submit"
              id="update-user"
              className="btn btn-dark mr-3"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              type="submit"
              id="delete-user"
              className="btn btn-dark mr-3"
              onClick={(event) => {
                event.preventDefault();

                setErrorState("");

                setModalState({
                  show: true,
                  type: "delete",
                  currentPassword: ""
                });
              }}
            >
              Delete
            </button>
          </div>
        </form>

        <ModalComp
          modalState={modalState}
          handleClose={() => setModalState({ show: false, type: "", currentPassword: "" })}
          handleInputChange={(event) => setModalState({ ...modalState, currentPassword: event.target.value })}
          handleSubmit={() => {
            handleSubmit();
            setModalState({ show: false, type: "", currentPassword: "" })
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
