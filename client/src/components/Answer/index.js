import React from "react";

function Answer({ handler, choice }) {
  return (
    <div className="col-lg-12 text-center pt-1 pb-1" onClick={handler}>
      <button className="btn btn-primary btn-lg btn-block" value={choice} >
        {choice}
      </button>
    </div>
  );
}

export default Answer;
