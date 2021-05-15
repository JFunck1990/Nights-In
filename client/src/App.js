import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import LoggedInContext from "./utils/LoggedInContext";
import TriviaContext from "./utils/TriviaContext";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Scores from "./pages/Scores";
import Trivia from "./pages/Trivia";
import TriviaSetup from "./pages/TriviaSetup";
import Invite from "./pages/Invite";
import background from "./images/black-brick.png";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [loggedInState, setLoggedInState] = useState({
    loggedIn: false,
    id: -1,
    username: "",
  });

  const [triviaState, setTriviaState] = useState({
    numberQuestions: 5,
    category: null,
    difficulty: "",
    type: "",
    changeContext: (newData) => {
      setTriviaState({
        ...triviaState,
        numberQuestions: newData.numberQuestions,
        category: newData.category,
        difficulty: newData.difficulty,
        type: newData.type,
      });
    },
  });

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "1200px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Router>
        <LoggedInContext.Provider value={loggedInState}>
          <TriviaContext.Provider value={triviaState}>
            <MobileMenu isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} setLoggedInState={setLoggedInState} />
            <Switch>
              <Route exact path={["/", "/dashboard"]}>
                <Redirect to="/dashboard/public" />
              </Route>

              <Route path={"/dashboard/:roomId"} component={Dashboard} />

              <Route path={"/login"}>
                <Login setLoggedInState={setLoggedInState} />
              </Route>

              <Route path={"/register"}>
                <Register />
              </Route>

              <Route path={"/profile"}>
                <Profile setLoggedInState={setLoggedInState} />
              </Route>

              <Route path={"/trivia"}>
                <Trivia />
              </Route>

              <Route path={"/trivia-setup"}>
                <TriviaSetup />
              </Route>

              <Route path={"/scores"}>
                <Scores />
              </Route>

              <Route path={"/invite"}>
                <Invite />
              </Route>

              <Route path={"*"}>
                <Error />
              </Route>
            </Switch>
          </TriviaContext.Provider>
        </LoggedInContext.Provider>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
