import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class FreshForm extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      price: ""
    };
  }
  clearInput = () => {
    this.inputItem.value = "";
    this.inputPrice.value = "";
  };

  handleChangeItem = event => {
    this.setState({ item: event.target.value });
  };

  handleChangePrice = event => {
    this.setState({ price: event.target.value });
  };

  handleSubmit = event => {
    // TODO: Add backend function to deal with data
    console.log("Ready to send data to backend");
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Typography variant="h6" id="modal-title">
          Submit a new deal!
        </Typography>
        <br />
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Item"
            onChange={this.handleChangeItem}
            placeholder="Enter a new item"
            ref={el => (this.inputItem = el)}
            variant="outlined"
            required
          />
          <br />
          <TextField
            label="Price"
            onChange={this.handleChangePrice}
            placeholder="Enter the price"
            ref={el => (this.inputPrice = el)}
            margin="normal"
            variant="outlined"
            required
          />
          {/* TODO: Add location input field */}
          <br />
          <div>
            <Button variant="outlined" color="secondary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default FreshForm;
