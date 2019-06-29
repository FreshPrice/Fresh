import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";
import InfoWindowCard from "./InfoWindowCard.jsx";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: {
        name: ""
      }
    };
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      showingInfoWindow: true,
      selectedPlace: props.item,
      activeMarker: marker
    });
  };

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayMarkers = () => {
    return this.props.itemMarkers.map(item => {
      return (
        <Marker
          key={item._id}
          position={{
            lat: item.location.coords.lat,
            lng: item.location.coords.lng
          }}
          onClick={this.onMarkerClick}
          item={item}
        />
      );
    });
  };

  render() {
    return (
      <div id="MapContainer">
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={15}
          initialCenter={{
            lat: 49.290338,
            lng: -123.134112
          }}
        >
          {this.displayMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <InfoWindowCard item={this.state.selectedPlace} />
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { itemMarkers: state.items.items };
};

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: "AIzaSyBGF_EU531RFgoWyUuc7eCjfJ6J3EUUFpY"
  })(MapContainer)
);
