import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Form, Select, Label, Message } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import GeoSuggest from "./GeoSuggest";
import { connect } from "react-redux";
import { addItem } from "../actions/AppActions.js";
import { PER_HUNDRED_GRAMS, PER_POUND, PER_KILOGRAM } from "../FreshStrings.js";
import Divider from "@material-ui/core/Divider";
import DialogAction from "@material-ui/core/DialogActions";
import "./FreshForm.css";

class FreshForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      unit: PER_HUNDRED_GRAMS,
      add: "",
      lat: 0,
      lng: 0,
      stateError: false
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

  handleChangeUnit = value => {
    this.setState({ unit: value });
  };

  setAddress = address => {
    this.setState({ add: address });
  };
  setLatLng = latLng => {
    this.setState({ lat: latLng.lat, lng: latLng.lng });
  };

  handleSubmit = event => {
    event.preventDefault();
    !this.state.add || !this.state.price || !this.state.name
      ? this.setState({ stateError: true })
      : this.addNewItem();
  };

  addNewItem = () => {
    this.setState({ stateError: false });
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
  };

  render() {
    const options = [
      { key: PER_KILOGRAM, text: PER_KILOGRAM, value: PER_KILOGRAM },
      {
        key: PER_HUNDRED_GRAMS,
        text: PER_HUNDRED_GRAMS,
        value: PER_HUNDRED_GRAMS
      },
      { key: PER_POUND, text: PER_POUND, value: PER_POUND }
    ];
    return (
      <div>
        <Typography variant="h6" id="modal-title">
          Submit a Fresh Deal
        </Typography>
        <Divider />
        <Form onSubmit={this.handleSubmit} error={this.state.stateError}>
          {/* Item Selection */}
          <Message
            error
            header="Action Forbidden"
            content="Everything on this form must be filled out"
          />
          <br />
          Item
          <div className="search-bar">
            <SearchBar
              allowAddOptions={true}
              placeholder="Choose Item"
              onValueUpdate={value => this.setState({ name: value })}
              onChange={false}
            />
          </div>
          <br />
          {/* Price Input */}
          Price
          <div className="price-bar">
          <Form.Input
            fluid
            labelPosition="right"
            placeholder="Price"
            action
            onChange={this.handleChangePrice}
            value={this.state.price}
            type="number"
            inputprops={{ min: "0", step: "0.01" }}
          >
            <Label basic>$</Label>
            <input />
            {/* Select Unit Choices */}
            <Select
              compact
              options={options}
              defaultValue={PER_HUNDRED_GRAMS}
              onChange={(event, data) => this.handleChangeUnit(data.value)}
              className="unit-select"
            />
          </Form.Input>
          </div>
          {/* Location Input */}
          <br/>
          Location
          <div className="geo-suggest">
            <GeoSuggest
              setAddress={this.setAddress.bind(this)}
              setLatLng={this.setLatLng.bind(this)}
              required
            />
          </div>
          <br />
          <div>
            <div className="submit-button">
              <DialogAction>
                <Form.Button
                  color="pink"
                  type="submit"
                  disabled={
                    !this.state.add || !this.state.price || !this.state.name
                  }
                >
                  Submit
                </Form.Button>
              </DialogAction>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addItem }
)(FreshForm);
