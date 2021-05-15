import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormInput from "../FormInput";

const ModalComp = function({ modalState, handleClose, handleInputChange, handleSubmit }) {
  return (
    <div>
      <Modal show={modalState.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to {modalState.type}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Enter your password to continue
          <FormInput
            colSize="12"
            placeholder="password123"
            name="password"
            value={modalState.currentPassword}
            handler={handleInputChange}
          />
        </Modal.Body>
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