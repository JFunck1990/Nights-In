import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";

function Login() {
  const [infoState, setInfoState] = useState({
    email: "",
    password: "",
  });

  const [errorState, setErrorState] = useState("");

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value, name } = event.target;

    switch (name) {
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
    if (infoState.email.length > 0 && infoState.password.length > 0) {
      setErrorState("");
      console.log("now do api call");
      // API.createUser(infoState);
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
              <h1>Login To Your Account</h1>
              <h3 id="err-msg">{errorState}</h3>
            </header>

            <form id= "create-form">
              <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputEmail">Email</label>
                <input
                  id="inputEmail"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={infoState.email}
                  onChange={handleInputChange}
                />
              </div>
              </div>

              <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="inputPassword">Password</label>
                <input
                  id="inputPassword"
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  name="password"
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

export default Login;