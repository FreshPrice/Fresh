import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SelectBar from "./SelectBar";
import GeoSuggest from "./GeoSuggest";
import { connect } from "react-redux";
import { addItem } from "../actions/CardActions.js";

const uuidv4 = require("uuid/v4");

class FreshForm extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      price: ""
    };
  }

  clearInput = () => {
    this.setState({
      item: "",
      price: ""
    });
  };

  handleChangeItem = event => {
    this.setState({ item: event.target.value });
  };

  handleChangePrice = event => {
    this.setState({ price: event.target.value });
  };

  handleSubmit = event => {
    let newItem = {
      item: this.state.item,
      price: "$" + this.state.price,
      rating: 0,
      uuid: uuidv4(),
      location: {
        coords: {
          lat: parseFloat(Math.random() * (49.2901 - 49.293) + 49.29),
          lng: parseFloat(Math.random() * (-123.121 - -123.125) + -123.12927)
        }
      }
    };
    this.props.addItem(newItem);
    this.clearInput();
    this.props.closeModalOnSubmit();
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
            value={this.state.item}
            variant="outlined"
            required
          />
          <br />
          <TextField
            label="Price"
            onChange={this.handleChangePrice}
            placeholder="Enter the price"
            value={this.state.price}
            margin="normal"
            variant="outlined"
            required
          />
          <br />
          <SelectBar />
          <GeoSuggest />
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

export default connect(
  null,
  { addItem }
)(FreshForm);
