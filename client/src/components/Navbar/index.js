import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import LoggedInContext from "../../utils/LoggedInContext";
import API from "../../utils/API";
import icon from "../../images/icon.png";

function Navbar({ toggle, loggedInState, setLoggedInState }) {
  const history = useHistory();
  const userInfo = useContext(LoggedInContext);

  const handleLogout = () => {
    API.logout()
      .then((res) => {
        if (res.status === 200) {
          setLoggedInState({...loggedInState, loggedIn: false});
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav className="navbar navbar-expand-sm">
      <Link to="/">
        <img id="navicon" src={icon} alt="icon" height={90} width={100} />
      </Link>

      <FaBars onClick={toggle} className="bars" size="35px" />

      <ul id="barlist" className="nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link barlink" to="/">
            Dashboard
          </Link>
        </li>
        {
          userInfo.loggedIn
          ? 
            [
              <li className="nav-item" key={0}>
                <Link className="nav-link barlink" to="/trivia">
                  Trivia
                </Link>
              </li>,
              <li className="nav-item" key={1}>
                <Link className="nav-link barlink" to="/scores">
                  Scores
                </Link>
              </li>,
              <li className="nav-item" key={2}>
                <Link className="nav-link barlink" to="/profile">
                  My Profile
                </Link>
              </li>,
              <li className="nav-item" key={3}>
                <Link className="nav-link barlink" to="/invite">
                  Invite
                </Link>
              </li>,
              <li className="nav-item" key={4}>
                <button
                  className="nav-link barlink"
                  id="logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>,
            ]
          :
            [
              <li className="nav-item" key={0}>
                <Link className="nav-link barlink" to="/login">
                  Login
                </Link>
              </li>,
              <li className="nav-item" key={1}>
                <Link className="nav-link barlink" to="/register">
                  Register
                </Link>
              </li>,
            ]
        }
      </ul>
    </nav>
  );
}

export default Navbar;
