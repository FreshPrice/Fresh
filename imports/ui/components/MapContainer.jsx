import React from "react";
import { Map, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";
import InfoWindowCard from "./InfoWindowCard.jsx";
import MapMarker from "./MapMarker.jsx";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: null,
      isUserSelected: false,
      selectedPlace: {
        name: ""
      }
    };
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      isUserSelected: true,
      showingInfoWindow: true,
      selectedPlace: props.item,
      activeMarker: marker
    });
  };

  onMouseover = (props, marker) => {
    if (!this.state.isUserSelected) {
      this.setState({
        showingInfoWindow: true,
        selectedPlace: props.item,
        activeMarker: marker
      });
    }
  };

  onMouseout = () => {
    if (!this.state.isUserSelected) {
      this.setState({
        showingInfoWindow: false
      });
    }
  };

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        isUserSelected: false,
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onInfoWindowClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        isUserSelected: false,
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayMarkers = () => {
    return this.props.itemMarkers.map(item => {
      return (
        <MapMarker
          key={item._id}
          position={{
            lat: item.location.coords.lat,
            lng: item.location.coords.lng
          }}
          onMouseover={this.onMouseover}
          onMouseout={this.onMouseout}
          onClick={this.onMarkerClick}
          item={item}
        />
      );
    });
  };

  render() {
    return (
      <div id="MapContainer">
        {/*---------------------------------------------------------------------------------
           These options will center the map at lat: 49.220037, lng: -122.974283, Vancouver.
           ---------------------------------------------------------------------------------*/}
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={10}
          scaleControl={true}
          mapTypeControl={false}
          fullscreenControl={false}
          streetViewControl={false}
          initialCenter={{
            lat: 49.220037,
            lng: -122.974283
          }}
        >
          {this.displayMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}
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
