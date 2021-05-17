import React, { useState } from "react";
import "./Login.css";
import API from "../../utils/API";
import { Container, Row, Col } from "../../components/Grid";
import FormInput from "../../components/FormInput";
import { useHistory } from "react-router-dom";

function Login({ assignLoginData }) {
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
        .then(({ data }) => {
          if (data.loggedIn) {
            assignLoginData(data);
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

    <div className="container">
      <div className="row">
        <div className="col-xl-2 col-lg-1 col-sm-1">
        </div>
        <div className="col-lg-8 col-md-12 col-sm-10 col-xs-12">
        <div className="login">
            <Row>
              <Col size="md-12">
                <header className="create-user-wrap header-wrap" align="center">
                    <h1 className="loginheader">Login To Your Account</h1>
                    <h3 id="err-msg">{errorState}</h3>
                </header>
                
                <div id="register-form">
                  
                  <div id="create-form">
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

                    <button
                      type="submit"
                      className="btn btn-dark"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Col>
            </Row>

        </div>
      </div>
    </div>
  </div>


      
  );
}

export default Login;
