import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormInput from "../FormInput";

const ModalComp = function({ show, handleClose, stateValue, handleInputChange, handleSubmit }) {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your password to continue</Modal.Title>
        </Modal.Header>
        <FormInput
          colSize="12"
          placeholder="password123"
          name="password"
          value={stateValue}
          handler={handleInputChange}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComp;