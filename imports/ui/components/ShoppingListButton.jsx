import React, { Component } from "react";
import Button from "@material-ui/core/Button";


class ShoppingListButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.currentUser && 
      <Button>ShoppingList</Button>}</div>
    );
  }
}

export default ShoppingListButton