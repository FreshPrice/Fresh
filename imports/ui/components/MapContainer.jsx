import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render() {
    return (
      <div id="MapContainer">
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 49.246292,
            lng: -123.116226
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBGF_EU531RFgoWyUuc7eCjfJ6J3EUUFpY"
})(MapContainer);
