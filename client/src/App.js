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
<<<<<<< HEAD
import Calender from "./pages/Calender"
=======
import background from "./images/black-brick.webp";
>>>>>>> 101c9f10d1514d4d96bc35a0d052e55f614fd55c

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div style={{ 
      backgroundImage: `url(${background})`,
      height: '1000px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
      }}>
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
    </div>
  );
}

export default App;
