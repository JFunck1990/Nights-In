import React from "react";

export function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export function Col(props) {
  const size = props.size
    .split(" ")
    .map(size => "col-" + size)
    .join(" ");
  
  return <div className={size} {...props} />;
}
