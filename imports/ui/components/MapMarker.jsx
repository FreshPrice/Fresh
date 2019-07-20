import { Marker } from "google-maps-react";

class MapMarker extends Marker {
  //Custom Map Marker prevents map from re-rendering unnecessarily.
  componentDidUpdate(prevProps) {
    if (
      this.props.map !== prevProps.map ||
      (this.props.position.lat !== prevProps.position.lat ||
        this.props.position.lng !== prevProps.position.lng)
    ) {
      if (this.marker) {
        this.marker.setMap(null);
      }
      this.renderMarker();
    }
  }
}

export default MapMarker;
