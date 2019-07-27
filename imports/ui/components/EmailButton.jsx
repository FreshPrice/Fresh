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
    this.props.sendEmail(items)
  }
  render() {
    const items = this.props.items;
    console.log(items)
    return (
      <div>
        <Button onClick={() => this.handleSend(items)}> Click for a uwu in your inbox! </Button>
      </div>
    );
  }
}

export default connect(
 null,
  {
    sendEmail
  }
)(EmailButton);
