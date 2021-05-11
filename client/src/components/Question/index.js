import React from "react";

function Question(props) {
  return (
    <div className="card-header text-center bg-warning">
      <h3>
        <div className="App">
          {props.question}
        </div>
      </h3>
    </div>
  );
}

export default Question;
