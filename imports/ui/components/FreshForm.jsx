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
      price: "",
      add: "",
      lat: 0,
      lng: 0
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

  setAddress = address => {
    this.setState({ add: address });
  };
  setLatLng = latLng => {
    this.setState({ lat: latLng.lat, lng: latLng.lng });
  };

  handleSubmit = event => {
    let newItem = {
      item: this.state.item,
      price: "$" + this.state.price,
      rating: 0,
      uuid: uuidv4(),
      location: {
        address: this.state.add,
        coords: {
          lat: this.state.lat,
          lng: this.state.lng
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
        <form onSubmit={this.handleSubmit}>
          <br />
          <SelectBar required />
          <br />
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
          <GeoSuggest
            setAddress={this.setAddress.bind(this)}
            setLatLng={this.setLatLng.bind(this)}
            required
          />
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
