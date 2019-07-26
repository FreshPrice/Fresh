import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Renew from "@material-ui/icons/Autorenew";
import "./RefreshButtonStyle.css"

class RefreshButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={this.props.refreshItems}
        >
          <Renew className="refresh-icon"/>
          refresh
        </Button>
      </div>
    );
  }
}

export default RefreshButton;
