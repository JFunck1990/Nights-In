import React from "react";

function ScoreEntry({ username, score }) {
  return (
    <li className="list-group-item">
      <div className="d-flex flex-row">
        <div className="col-md-6 d-flex justify-content-start">{username}</div>
        <div className="col-md-6 d-flex justify-content-end">{score}</div>
      </div>
    </li>
  );
}

export default ScoreEntry;