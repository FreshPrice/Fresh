import React from "react";
import MapContainer from "./components/MapContainer.jsx";
import CardList from "./components/CardList.jsx";
import Typography from "@material-ui/core/Typography";
import "./App.css";

const App = () => (
  <div className="AppContainer">
    <div className="fresh-header">
      <Typography variant="h3">Fresh</Typography>
    </div>
    <div className="map-container">
      <MapContainer />
    </div>
    <div className="card-list">
      <CardList />
    </div>
  </div>
);

export default App;
