import React from "react";

function Answer(props) {
  return (
    <button className="btn btn-primary btn-lg btn-block" id={props.choice} >
      {props.choice}
    </button>
  );
}

export default Answer;
