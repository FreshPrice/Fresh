import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { connect } from "react-redux";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  displayMarkers = () => {
    return this.props.items.items.map(item => {
      console.log(item);

      return (
        <Marker
          key={item.uuid}
          id={item.uuid}
          position={{
            lat: item.location.coords.lat,
            lng: item.location.coords.lng
          }}
          onClick={() =>
            console.log("You clicked " + item.item + " with uuid: " + item.uuid)
          }
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

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: "AIzaSyBGF_EU531RFgoWyUuc7eCjfJ6J3EUUFpY"
  })(MapContainer)
);
