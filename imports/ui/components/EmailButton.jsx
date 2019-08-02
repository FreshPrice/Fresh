import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { sendEmail } from "../actions/AppActions.js";

class EmailButton extends Component {
  constructor(props) {
    super(props);
  }

  handleSend = items => {
    event.preventDefault();
    this.props.sendEmail(items);
  };
  render() {
    const items = this.props.items;
    return (
      <span>
        <Button variant="outlined" onClick={() => this.handleSend(items)}>
          Email me my shopping list
        </Button>
      </span>
    );
  }
}

export default connect(
  null,
  {
    sendEmail
  }
)(EmailButton);
