import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class SortButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid item>
          <ButtonGroup
            variant="contained"
            size="small"
            aria-label="Sort buttons"
          >
            <Button
              style={{
                color: "white",
                backgroundColor:
                  this.props.toggleOnState == "LATEST" ? "#00600f" : "#75a478"
              }}
              onClick={this.props.sortByLatestPressed}
            >
              Sort by Latest
            </Button>
            <Button
              style={{
                color: "white",
                backgroundColor:
                  this.props.toggleOnState == "PRICE" ? "#00600f" : "#75a478"
              }}
              onClick={this.props.sortByPricePressed}
            >
              Sort by price
            </Button>
          </ButtonGroup>
        </Grid>
      </div>
    );
  }
}

export default SortButtons;
