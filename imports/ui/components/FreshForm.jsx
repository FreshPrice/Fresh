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
      price: "",
      add: "",
      lat: 0,
      lng: 0
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

  setAddress = address => {
    this.setState({ add: address });
  };
  setLatLng = latLng => {
    this.setState({ lat: latLng.lat, lng: latLng.lng });
  };

  handleSubmit = event => {
    let newItem = {
      name: this.state.name,
      price: "$" + this.state.price,
      createdAt: new Date(),
      rating: 0,
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
