import React from "react";
import MapContainer from "./components/MapContainer.jsx";
import CardList from "./components/CardList.jsx";
import FreshModal from "./components/Modal.jsx";
import SearchBar from "./components/SearchBar.jsx";
import LoginBar from "./components/AccountsUIWrapper";
import "./App.css";

const App = () => (
  <div className="AppContainer">
    <div className="left-section">
      <LoginBar />
      <div className="fresh-header">
        <img className="logo" src="/logo.png" />
      </div>
      <div className="map-container">
        <MapContainer />
      </div>
    </div>
    <div className="right-section">
      <div className="search-bar">
        <SearchBar
          allowAddOptions={false}
          placeholder="Find Item"
          onChange={true}
        />
      </div>
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
