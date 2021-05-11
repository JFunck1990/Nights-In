import React from "react";
import { Link } from "react-router-dom";

function LogInBox() {
  return (
    <div className='row'>
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="orange-border">
          <div className="message-bg">
            Please<Link to="/login"> log in </Link>to continue using this app.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInBox;