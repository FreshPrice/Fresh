import React, { Component } from "react";
import Button from "@material-ui/core/Button";


class ShoppingListButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>{this.props.currentUser && 
      <Button>ShoppingList</Button>}</span>
    );
  }
}

export default ShoppingListButton