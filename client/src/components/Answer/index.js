import React from "react";

function Answer(props) {
  return (
    <button className="btn btn-primary">
      {props.choice}
    </button>
  );
}

export default Answer;
