import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { GoogleApiWrapper } from "google-maps-react";
import { classnames } from "../actions/GeoHelper";
import "./GeoSuggestStyle.css"

export class GeoSuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.setLatLng(latLng))
      .then(this.setState({ address }))
      .then(this.props.setAddress(address))
      .catch(error => console.error("Error", error));
  };

  handleCloseClick = () => {
    this.setState({
      address: ""
    });
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          {
            return (
              <div className="Demo__search-bar-container">
                <div className="Demo__search-input-container">
                  <input
                    {...getInputProps({
                      placeholder: "Search Places...",
                      className: "Demo__search-input"
                    })}
                  />
                  {this.state.address.length > 0 && (
                    <button
                      className="Demo__clear-button"
                      onClick={this.handleCloseClick}
                    >
                      x
                    </button>
                  )}
                </div>
                {suggestions.length > 0 && (
                  <div className="Demo__autocomplete-container">
                    {suggestions.map(suggestion => {
                      const className = classnames("Demo__suggestion-item", {
                        "Demo__suggestion-item--active": suggestion.active
                      });

                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, { className })}
                        >
                          <strong>
                            {suggestion.formattedSuggestion.mainText}
                          </strong>{" "}
                          <small>
                            {suggestion.formattedSuggestion.secondaryText}
                          </small>
                        </div>
                      );
                    })}
                    <div className="Demo__dropdown-footer">
                      <div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }
        }
        }
      </PlacesAutocomplete>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBGF_EU531RFgoWyUuc7eCjfJ6J3EUUFpY"
})(GeoSuggest);
