import React from "react";

function LogInBox() {
  return (
    <div className='row'>
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="orange-border">
          <div className="message-bg">
            Please<a href="/login"> log in </a>to continue using this app.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInBox;