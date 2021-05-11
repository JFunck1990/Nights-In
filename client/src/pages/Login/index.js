import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import FormInput from "../../components/FormInput";

function Login({ loggedInState, setLoggedInState }) {
  const history = useHistory();

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
        setInfoState({ ...infoState, email: value });
        break;

      case "password":
        setInfoState({ ...infoState, password: value });
        break;

      default:
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (infoState.email.length > 0 && infoState.password.length > 0) {
      setErrorState("");
      API.login(infoState)
        .then((res) => {
          if (res.data.loggedIn) {
            setLoggedInState({ loggedIn: true, id: res.data.id, username: res.data.username});
            history.push("/");
          } else {
            setErrorState("*The password or email was incorrect*");
          }
        })
        .catch((err) => console.log("Error: ", err));

      setInfoState({
        email: "",
        password: "",
      });
    } else {
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

            <form id="create-form">
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

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
