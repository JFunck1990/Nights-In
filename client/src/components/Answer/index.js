import React from "react";

function Answer(props) {
  return (
    <button className="btn btn-primary btn-lg btn-block">
      {props.choice}
    </button>
  );
}

export default Answer;
