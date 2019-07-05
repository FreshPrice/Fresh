import React from "react";
import MapContainer from "./components/MapContainer.jsx";
import CardList from "./components/CardList.jsx";
import Typography from "@material-ui/core/Typography";
import FreshModal from "./components/Modal.jsx";
import "./App.css";

const App = () => (
  <div className="AppContainer">
    <div className="left-section">
      <div className="fresh-header">
        <img src="/logo.png" height="100%" />
      </div>
      <div className="map-container">
        <MapContainer />
      </div>
    </div>
    <div className="right-section">
      <div className="card-list">
        <CardList />
      </div>
      <div className="new-post-fab">
        <FreshModal />
      </div>
    </div>
  </div>
);

export default App;
