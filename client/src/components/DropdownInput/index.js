import React from "react";
import { Dropdown, DropdownButton} from "react-bootstrap";

function DropdownInput({ title, handler, name, actions }) {
  return (
    <DropdownButton id="dropdown-basic-button" title={title}>
      {actions.map(action => {
        return (
        <Dropdown.Item
          as="button"
          key={action}
          name={name}
          value={action}
          onClick={handler}
        >
          {action}
        </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
};

export default DropdownInput;