import React from "react";
import icon from '../../images/image.png';
import {FaBars} from 'react-icons/fa';
import style from './style.css';

function Navbar({ toggle }) {
  return (
    <nav className="navbar navbar-expand-sm" >
    <img src={icon} alt='icon' height={90} width={100}/>

    <FaBars onClick={toggle} className='bars' size="35px"/>

    <ul className="nav ml-auto">
        {/* {{#if isloggedin}} */}
        <li className="nav-item">
            <a className="nav-link" href="/dashboard">Dashboard</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/scores">Scores</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/profile">My Profile</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/calender">Calender</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/logout">Logout</a>
        </li>
        {/* {{else}} */}
        <li className="nav-item">
            <a className="nav-link" href="#" id="login-modal">Login</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
        </li>
        {/* {{/if}} */}
    </ul>
    </nav>
  );
}

export default Navbar;