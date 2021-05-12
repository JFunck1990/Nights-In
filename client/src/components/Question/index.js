import React from "react";

function Question(props) {
  return (
    <div className="card-header text-center bg-warning">
      <h3>
        <div className="App">
         <div><h4>{props.category}</h4></div>
          {props.question}
        </div>
      </h3>
    </div>
  );
}

export default Question;
