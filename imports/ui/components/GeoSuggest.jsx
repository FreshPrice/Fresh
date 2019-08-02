import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { GoogleApiWrapper } from "google-maps-react";
import { classnames } from "../actions/GeoHelper";
import "./GeoSuggestStyle.css";

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
    this.props.setAddress("");
    this.props.setLatLng({ lat: 0, lng: 0 });
  };

  render() {
    /* -----------------------------------------------------------
   These options will bias the autocomplete predictions toward 
        Vancouver, Canada with a radius of 80 kilometers.
	-------------------------------------------------------------*/
    const searchOptions = {
      location: new google.maps.LatLng(49.220037, -122.974283),
      radius: 80000
    };

    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        highlightFirstSuggestion={true}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => {
          {
            return (
              <div className="search-bar-container">
                <div className="search-input-container">
                  <input
                    {...getInputProps({
                      placeholder: "Search Places...",
                      className: "search-input"
                    })}
                  />
                  {this.state.address.length > 0 && (
                    <button
                      className="clear-button"
                      onClick={this.handleCloseClick}
                    >
                      x
                    </button>
                  )}
                </div>
                {suggestions.length > 0 && (
                  <div className="autocomplete-container">
                    {suggestions.map(suggestion => {
                      const className = classnames("suggestion-item", {
                        "suggestion-item--active": suggestion.active
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
                  </div>
                )}
              </div>
            );
          }
        }}
      </PlacesAutocomplete>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBGF_EU531RFgoWyUuc7eCjfJ6J3EUUFpY"
})(GeoSuggest);
