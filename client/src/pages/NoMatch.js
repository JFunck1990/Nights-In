import React from "react";

function NoMatch() {
  return (
    <div className="container">
        <div className="jumbotron mt-4">
            <h1 className="display-4 text-center">404 Not Found
                <span role="img" aria-label="Face with rolling eyes">🙄</span>
            </h1>
            <a href="/">← Back To Home</a>
        </div>
    </div>
  );
}

export default NoMatch;
