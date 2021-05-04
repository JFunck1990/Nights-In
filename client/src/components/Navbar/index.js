import React from "react";
import icon from '../../images/brand-icon.png';
// import {FaBars} from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light" >
      <a className="navbar-brand" href="/">
        <img src={icon} alt='icon' height={90} width={100}/>
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <FaBars onClick={toggle} className='bars' size="35px"/> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link" href="/">Dashboard</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/trivia">Trivia</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/scores">Scores</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/profile">Profile</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
