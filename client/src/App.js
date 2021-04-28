import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trivia from "./pages/Trivia";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Trivia />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
