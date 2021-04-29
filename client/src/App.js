import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Scores from "./pages/Scores";
import Trivia from "./pages/Trivia";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Dashboard />
          </Route>
          
          <Route path={"/register"}>
            <Register />
          </Route>

          <Route path={"/profile"}>
            <Profile />
          </Route>

          <Route path={"/trivia"}>
            <Trivia />
          </Route>

          <Route path={"/scores"}>
            <Scores />
          </Route>

          <Route path={"*"}>
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
