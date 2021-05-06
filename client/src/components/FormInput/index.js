import React from "react";

function FormInput(props) {
  return (
    <div className="form-row">
      <div className="form-group col-md-12">
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
    </div>
  );
};

export default FormInput;