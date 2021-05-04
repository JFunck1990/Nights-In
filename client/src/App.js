import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Scores from "./pages/Scores";
import Trivia from "./pages/Trivia";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Dashboard />
          </Route>

          <Route path={"/profile"}>
            <Profile />
          </Route>
          
          <Route path={"/register"}>
            <Register />
          </Route>
          
          <Route path={"/scores"}>
            <Scores />
          </Route>
          
          <Route path={"/trivia"}>
            <Trivia />
          </Route>
          
          <Route path={"*"}>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
