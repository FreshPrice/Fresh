import React from "react";
import Map from "./components/Map.jsx";
import CardList from "./components/CardList.jsx";
import FreshModal from "./components/Modal.jsx";

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Map />
    <CardList />
    <FreshModal />
  </div>
);

export default App;
