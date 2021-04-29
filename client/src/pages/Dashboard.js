import React from "react";

function Dashboard() {
  return (
    <div id="main-container" className="container">
      <div className="jumbotron text-center header-wrap" align="center">
        <p className="lead">Welcome to <strong>Sample App</strong></p>
        <hr className="my-4" />
        <div>
          {/* {{#if isloggedin}} */}
            {/* You are logged in as {{user.firstName}} */}
            <a href="/logout"> <button type="btn" className="btn">Logout</button></a>
          {/* {{else}} */}
            <p>You need to log in to use this app.</p>
          {/* {{/if}} */}
          <h5 id="login-err-msg"></h5>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
