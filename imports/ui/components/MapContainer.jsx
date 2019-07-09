import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";
import InfoWindowCard from "./InfoWindowCard.jsx";
import ShoppingList from "./ShoppingList";
import { Meteor } from "meteor/meteor";

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
        {/*---------------------------------------------------------------------------------
           These options will center the map at lat: 49.220037, lng: -122.974283, Vancouver.
           --------------------------------------------------------------------------------*/}
        <ShoppingList currentUser={Meteor.user()}/>           
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
