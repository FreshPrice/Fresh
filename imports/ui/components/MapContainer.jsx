import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ latitude: 49.289554, longitude: -123.132621 }]
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
