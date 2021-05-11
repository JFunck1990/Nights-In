import React from "react";

function Error() {
  return (
    <div className="container">
      <div className="jumbotron mt-4">
        <h1 className="display-4 text-center" style={{ fontWeight: "bold" }}>
          No games here!
        </h1>
        <a href="/" style={{ fontWeight: "bold" }}>
          ← Head Back Home!
        </a>
      </div>
    </div>
  );
}

export default Error;
