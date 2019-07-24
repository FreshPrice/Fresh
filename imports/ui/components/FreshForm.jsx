import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
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
      stateError: false,
      imageSrc: ""
    };
  }

  handleItemChange = value => {
    this.setState({
      name: value,
      imageSrc: "/images/" + value + ".png"
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

  handleFileSelect = e => {
    const reader = new FileReader();
    if (e.target.files.length > 0) {
      const image = e.target.files[0];
      reader.readAsDataURL(image);
      reader.onload = () => {
        let result = reader.result;
        this.setState({
          imageSrc: result
        });
      };

      reader.onerror = error => {
        console.log(error);
        this.setState({
          imageSrc: "/images/" + this.state.name + ".png"
        });
      };
    } else {
      // Image was selected then unselected, need to revert to base image.
      this.setState({
        imageSrc: "/images/" + this.state.name + ".png"
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    !this.state.add || !this.state.price || !this.state.name || !this.state.lat
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
      imageSrc: this.state.imageSrc,
      location: {
        address: this.state.add,
        coords: {
          lat: this.state.lat,
          lng: this.state.lng
        }
      }
    };
    this.props.addItem(newItem);
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
              onValueUpdate={this.handleItemChange}
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
              min="0"
              step="0.01"
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
          <br />
          {/* Optional Image Input */}
          Image - Optional
          <div className="geo-suggest">
            <input
              type="file"
              accept="image/*"
              onChange={this.handleFileSelect}
            />
          </div>
          <br />
          {/* Location Input */}
          Location
          <div className="geo-suggest">
            <GeoSuggest
              setAddress={this.setAddress.bind(this)}
              setLatLng={this.setLatLng.bind(this)}
              required
            />
          </div>
          <div>
            <div className="submit-button">
              <DialogAction>
                <Form.Button
                  color="pink"
                  type="submit"
                  disabled={
                    !this.state.add ||
                    !this.state.price ||
                    !this.state.name ||
                    this.state.lat === 0
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
