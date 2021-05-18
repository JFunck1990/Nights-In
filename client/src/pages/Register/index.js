import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import FormInput from "../../components/FormInput";

function Register() {
  const history = useHistory();

  const [infoState, setInfoState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  });

  const [errorState, setErrorState] = useState("");

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value, name } = event.target;

    setInfoState({ ...infoState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (infoState.firstName.length > 0
        && infoState.lastName.length > 0
        && infoState.username.length > 0
        && infoState.email.length > 0
        && infoState.password.length > 0)
    {
      setErrorState("");

      API.createUser(infoState);

      setInfoState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
      });

      history.push("/login");
    }
    else {
      setErrorState("*Please fill out all fields*");
    }
  };

  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-1 col-sm-1">
      </div>
      <div className="col-lg-10 col-md-12 col-sm-10 col-xs-12">

     
    <div className="register">
      <Row>
        <Col size="md-12">
            <header className="create-user-wrap header-wrap" align="center">
              <h1 style={{fontStyle: "italic"}} >Create Your Account</h1>
              <h3 id="err-msg">{errorState}</h3>
            </header>

          <div id="register-form">
            

            <form id= "create-form">
              <div className="form-row">
                <FormInput
                  id="inputFirst"
                  colSize="12"
                  placeholder="John"
                  label="First Name"
                  name="firstName"
                  value={infoState.firstName}
                  handler={handleInputChange}
                />
              </div>

              <div className="form-row">
                <FormInput
                  id="inputLast"
                  colSize="12"
                  placeholder="Doe"
                  label="Last Name"
                  name="lastName"
                  value={infoState.lastName}
                  handler={handleInputChange}
                />
              </div>

              <div className="form-row">
                <FormInput
                  id="inputUsername"
                  colSize="12"
                  placeholder="Username"
                  label="Username"
                  name="username"
                  value={infoState.username}
                  handler={handleInputChange}
                />
              </div>

              <div className="form-row">
                <FormInput
                  id="inputEmail"
                  type="email"
                  colSize="12"
                  placeholder="example@email.com"
                  label="Email"
                  name="email"
                  value={infoState.email}
                  handler={handleInputChange}
                />
              </div>

              <div className="form-row">
                <FormInput
                  id="inputPassword"
                  type="password"
                  colSize="12"
                  placeholder="password123"
                  label="Password"
                  name="password"
                  value={infoState.password}
                  handler={handleInputChange}
                />
              </div>

              <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</div>
</div>
  );
}

export default Register;
