import React from "react";
import icon from '../../images/image.png';
import {FaBars} from 'react-icons/fa';
import './style.css';

function Navbar({ toggle }) {
  return (
    <nav className="navbar navbar-expand-sm" >
    <img id="navicon" src={icon} alt='icon' height={90} width={100}/>

    <FaBars onClick={toggle} className='bars' size="35px"/>

    <ul id="barlist" className="nav ml-auto">
        {/* {{#if isloggedin}} */}
        <li className="nav-item">
            <a className="nav-link barlink" href="/dashboard">Dashboard</a>
        </li>
        <li className="nav-item">
            <a className="nav-link barlink" href="/scores">Scores</a>
        </li>
        <li className="nav-item">
            <a className="nav-link barlink" href="/profile">My Profile</a>
        </li>
        <li className="nav-item">
            <a className="nav-link barlink" href="/invite">Invite</a>
        </li>
        <li className="nav-item">
            <a className="nav-link barlink" href="/logout">Logout</a>
        </li>
        <li className="nav-item">
            <a className="nav-link barlink" href="/login">Login</a>
        </li>
        <li className="nav-item">
            <a className="nav-link barlink" href="/register">Register</a>
        </li>
    </ul>
    </nav>
  );
}

export default Navbar;