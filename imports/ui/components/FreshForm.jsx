import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Form, Radio } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import GeoSuggest from "./GeoSuggest";
import { connect } from "react-redux";
import { addItem } from "../actions/AppActions.js";
import { PER_HUNDRED_GRAMS, PER_POUND, PER_KILOGRAM } from "../FreshStrings.js";

class FreshForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      unit: "",
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

  handleChangeUnit = (event, { value }) => {
    this.setState({ unit: value });
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
      price: parseFloat(this.state.price),
      unit: this.state.unit,
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
          {/* Item Selection */}
          <SearchBar
            allowAddOptions={true}
            placeholder="Choose Item"
            onValueUpdate={value => this.setState({ name: value })}
            onChange={false}
          />
          <br />

          {/* Price Input */}
          <TextField
            label="Price"
            onChange={this.handleChangePrice}
            placeholder="Enter the price"
            value={this.state.price}
            margin="normal"
            variant="outlined"
            type="number"
            inputProps={{ min: "0", step: "0.01" }}
            required
          />

          {/* Select Unit Choices */}
          <Form.Field>
            <Radio
              label={PER_KILOGRAM}
              name="radioGroup"
              value={PER_KILOGRAM}
              checked={this.state.unit === PER_KILOGRAM}
              onChange={this.handleChangeUnit}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label={PER_POUND}
              name="radioGroup"
              value={PER_POUND}
              checked={this.state.unit === PER_POUND}
              onChange={this.handleChangeUnit}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label={PER_HUNDRED_GRAMS}
              name="radioGroup"
              value={PER_HUNDRED_GRAMS}
              checked={this.state.unit === PER_HUNDRED_GRAMS}
              onChange={this.handleChangeUnit}
            />
          </Form.Field>
          <br />

          {/* Location Input */}
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
