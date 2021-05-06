import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";

function Register() {
  const [infoState, setInfoState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value, id } = event.target;

    switch (id) {
      case "firstName":
        setInfoState({...infoState, firstName: value});
        break;

      case "lastName":
        setInfoState({...infoState, lastName: value});
        break;

      case "email":
        setInfoState({...infoState, email: value});
        break;

      case "password":
        setInfoState({...infoState, password: value});
        break;

      default:
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.createUser(infoState);
  };

  return (
    <Container>
      <Row>
        <Col size="md-12">
          <div id="register-form">
            <header className="create-user-wrap header-wrap" align="center">
              <h1>Create Your Account</h1>
              <h3 id="create-err-msg"></h3>
            </header>

            <form id= "create-form">

              <div className="form-row">
              <div className="form-group col-md-12">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John"
                  id="firstName"
                  value={infoState.firstName}
                  onChange={handleInputChange}
                />
              </div>
              </div>

              <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputLast">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Doe"
                  id="lastName"
                  value={infoState.lastName}
                  onChange={handleInputChange}
                />
              </div>
              </div>

              <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  value={infoState.email}
                  onChange={handleInputChange}
                />
              </div>
              </div>

              <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword">Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  value={infoState.password}
                  onChange={handleInputChange}
                />
              </div>
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
