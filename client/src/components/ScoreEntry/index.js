import React from "react";

function ScoreEntry({ entry }) {
  return (
    <li className="list-group-item">
      <div className="d-flex flex-row">
        <div className="col-md-6 d-flex justify-content-start">{entry.username}</div>
        <div className="col-md-6 d-flex justify-content-end">{entry.score}</div>
      </div>
    </li>
  );
}

export default ScoreEntry;