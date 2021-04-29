import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <a className="navbar-brand" href="/">
        AppName
    </a>
    
    <ul className="nav navbar-nav ml-auto">

        <li className="nav-item">
            <a className="nav-link" href="/some-feature">Menu item here</a>
        </li>

        {/* {{#if isloggedin}} */}
        <li className="nav-item">
            <a className="nav-link" href="/example">Example page</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/profile">My Profile</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/logout">Logout</a>
        </li>
        {/* {{else}}
        <li className="nav-item">
            <a className="nav-link" href="#" id="login-modal">Login</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/register" data-register={{register}}>Register</a>
        </li>
        {{/if}} */}
    </ul>
    </nav>
  );
}

export default Navbar;