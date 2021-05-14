import React from "react";

function FormInput(props) {
  return (
    <div className={`form-group col-md-${props.colSize}`}>
      {props.label ? <label htmlFor={props.id}>{props.label}</label> : null}
      <input
        id={props.id}
        type={props.type ? props.type : "text"}
        className="form-control"
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.handler}
      />
    </div>
  );
};

export default FormInput;