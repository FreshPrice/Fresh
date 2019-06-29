import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchBar from "./SearchBar";
import GeoSuggest from "./GeoSuggest";
import { connect } from "react-redux";
import { addItem } from "../actions/AppActions.js";

class FreshForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: ""
    };
  }

  clearInput = () => {
    this.setState({
      name: "",
      price: ""
    });
  };

  handleChangePrice = event => {
    this.setState({ price: event.target.value });
  };

  handleSubmit = event => {
    let newItem = {
      name: this.state.name,
      price: "$" + this.state.price,
      createdAt: new Date(),
      rating: 0,
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
          <SearchBar
            allowAddOptions={true}
            placeholder="Choose Item"
            onValueUpdate={value => this.setState({ name: value })}
            onChange={false}
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
