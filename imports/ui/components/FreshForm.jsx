import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchBar from "./SearchBar";
import GeoSuggest from "./GeoSuggest";
import { connect } from "react-redux";
import { addItem } from "../actions/AppActions.js";
import "./FreshForm.css";

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
      ratingCount: 0,
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
          SUBMIT A NEW DEAL
        </Typography>
        <br />
        <form onSubmit={this.handleSubmit} className="Form">
          <Typography variant="subtitle1" id="modal-title">
            Select an item from the list!
          </Typography>
          <div className="search-bar">
            <SearchBar
              allowAddOptions={true}
              placeholder="Item..."
              onValueUpdate={value => this.setState({ name: value })}
              onChange={false}
            />
          </div>
          <br />
          <TextField
            variant="outlined"
            label="Price"
            onChange={this.handleChangePrice}
            value={this.state.price}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              endAdornment: <InputAdornment position="end">lb</InputAdornment>
            }}
          />
          <div className="geo-suggest">
            <br />
            <GeoSuggest
              setAddress={this.setAddress.bind(this)}
              setLatLng={this.setLatLng.bind(this)}
              required
            />
          </div>
          <br />
          <div className="submit-button">
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
