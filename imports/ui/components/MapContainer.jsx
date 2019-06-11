import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 49.290338, lng: -123.134112 },
        { latitude: 49.289554, longitude: -123.132621 },
        { latitude: 49.290338, longitude: -123.134112 },
        { latitude: 49.290198, longitude: -123.13234 },
        { latitude: 49.288931, longitude: -123.13791 },
        { latitude: 49.290254, longitude: -123.132653 },
        { latitude: 49.286682, longitude: -123.139346 }
      ]
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <div id="MapContainer">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: 49.290338,
            lng: -123.134112
          }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBGF_EU531RFgoWyUuc7eCjfJ6J3EUUFpY"
})(MapContainer);
