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
    <Container>
      <Row>
        <Col size="md-12">
          <div id="register-form">
            <header className="create-user-wrap header-wrap" align="center">
              <h1>Create Your Account</h1>
              <h3 id="err-msg">{errorState}</h3>
            </header>

            <form id= "create-form">
              <FormInput
                id="inputFirst"
                placeholder="John"
                label="First Name"
                name="firstName"
                value={infoState.firstName}
                handler={handleInputChange}
              />

              <FormInput
                id="inputLast"
                placeholder="Doe"
                label="Last Name"
                name="lastName"
                value={infoState.lastName}
                handler={handleInputChange}
              />

              <FormInput
                id="inputUsername"
                placeholder="Username"
                label="Username"
                name="username"
                value={infoState.username}
                handler={handleInputChange}
              />

              <FormInput
                id="inputEmail"
                type="email"
                placeholder="example@email.com"
                label="Email"
                name="email"
                value={infoState.email}
                handler={handleInputChange}
              />

              <FormInput
                id="inputPassword"
                type="password"
                placeholder="password123"
                label="Password"
                name="password"
                value={infoState.password}
                handler={handleInputChange}
              />

              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
