import React from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui/dist/semantic.min.css";

const groceryOptions = [
  {
    key: "Bananas",
    text: "Bananas",
    value: "Bananas"
  },
  {
    key: "Apples",
    text: "Apples",
    value: "Apples"
  },
  {
    key: "Oranges",
    text: "Oranges",
    value: "Oranges"
  }
];

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder="Select..."
    fluid
    search
    selection
    options={groceryOptions}
  />
);

export default DropdownExampleSelection;
