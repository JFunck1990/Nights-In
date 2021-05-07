import React from "react";
import icon from '../../images/icon.png';
import {FaBars} from 'react-icons/fa';
import './style.css';
import API from "../../utils/API";

function Navbar({ toggle }) {
  const handleLogout = () => {
    API.logout()
      .then(res => {
        if (res.status === 200) {
          localStorage.removeItem("user");
          window.location.reload();
        }
      })
      .catch(err => console.log("Error: ", err));
  }

  return (
    <nav className="navbar navbar-expand-sm" >
      <img id="navicon" src={icon} alt='icon' height={90} width={100}/>

      <FaBars onClick={toggle} className='bars' size="35px"/>

      <ul id="barlist" className="nav ml-auto">
        <li className="nav-item">
          <a className="nav-link barlink" href="/">Dashboard</a>
        </li>
        {
          localStorage.getItem("user") ?
            [<li className="nav-item" key={0}>
              <a className="nav-link barlink" href="/trivia">Trivia</a>
            </li>,
            <li className="nav-item" key={1}>
              <a className="nav-link barlink" href="/scores">Scores</a>
            </li>,
            <li className="nav-item" key={2}>
              <a className="nav-link barlink" href="/profile">My Profile</a>
            </li>,
            <li className="nav-item" key={3}>
              <a className="nav-link barlink" href="/invite">Invite</a>
            </li>,
            <li className="nav-item" key={4}>
              <button className="nav-link barlink" id="logout-button" onClick={handleLogout}>Logout</button>
            </li>]
            :
            [<li className="nav-item" key={0}>
              <a className="nav-link barlink" href="/login">Login</a>
            </li>,
            <li className="nav-item" key={1}>
              <a className="nav-link barlink" href="/register">Register</a>
            </li>]
        }
      </ul>
    </nav>
  );
}

export default Navbar;