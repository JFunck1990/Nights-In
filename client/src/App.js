import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trivia from "./pages/Trivia";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Trivia />
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
