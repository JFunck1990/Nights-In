import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Scores from "./pages/Scores";
import Trivia from "./pages/Trivia";
import Calender from "./pages/Calender"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <div>
        <MobileMenu isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
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

          <Route path={"/calender"}>
            <Calender/>
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
