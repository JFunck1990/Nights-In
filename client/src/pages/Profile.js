import React, { useState, useEffect, useContext } from "react";
import LoggedInContext from "../utils/LoggedInContext";
import API from "../utils/API";
import FormInput from "../components/FormInput";
import ModalComp from "../components/ModalComp";

function Profile() {
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
    currentPassword: "",
    newPassword: ""
  });

  const [modalState, setModalState] = useState({
    show: false,
    type: ""
  });

  const [errorState, setErrorState] = useState("");

  const handleProfile = () => {
    API.getUser(userInfo.id)
      .then(({ data }) => {
        console.log(data);
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
      && newInfoState.email === userState.email)
    {
      setErrorState("*Change at least one field*");
    }
    else {
      setErrorState("");

      setModalState({
        show: true,
        type: "update"
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
        currentPassword: newInfoState.currentPassword,
        newPassword: newInfoState.newPassword
      })
        .then(() => handleProfile());
    }
    else if (modalState.type === "delete") {
      console.log("delete")
    }
    else {
      console.log("error")
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
      currentPassword: "",
      newPassword: ""
    });
  }, [userState]);

  return (
    <div className="container pt-5">
      {/* Card Header */}
      <div className="card border border-dark">
        <div className="card-header text-center bg-warning">
          <h2>Update Profile</h2>
        </div>

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
              placeholder="John"
              label="First Name"
              name="firstName"
              value={newInfoState.firstName}
              handler={handleInputChange}
            />

            <FormInput
              id="inputLast"
              colSize="6"
              placeholder="Doe"
              label="Last Name"
              name="lastName"
              value={newInfoState.lastName}
              handler={handleInputChange}
            />
          </div>

          {/* Email & Password */}
          <div className="form-row p-2">
            <FormInput
              id="inputUsername"
              colSize="6"
              placeholder="Username"
              label="Username"
              name="username"
              value={newInfoState.username}
              handler={handleInputChange}
            />

            <FormInput
              id="inputEmail"
              colSize="6"
              placeholder="example@email.com"
              label="Email"
              name="email"
              value={newInfoState.email}
              handler={handleInputChange}
            />
          </div>

          {/* Buttons */}
          <div className="text-center pb-4">
            <button
              type="submit"
              id="update-user"
              className="btn btn-primary mr-3"
              onClick={handleUpdate}
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
          </div>
        </form>

        <ModalComp
          show={modalState.show}
          handleClose={() => {
            console.log(newInfoState);
            setModalState({ show: false, type: "" })
          }}
          stateValue={newInfoState.currentPassword}
          handleInputChange={handleInputChange}
          handleSubmit={() => {
            handleSubmit();
            setModalState({ show: false, type: "" })
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
