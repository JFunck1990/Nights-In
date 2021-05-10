import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div id="modal">
      {props.show ? "Hello" : null}
    </div>
  );
}

export default Modal;