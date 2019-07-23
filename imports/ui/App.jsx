import React, { Component } from "react";
import MapContainer from "./components/MapContainer.jsx";
import CardList from "./components/CardList.jsx";
import FreshModal from "./components/Modal.jsx";
import SearchBar from "./components/SearchBar.jsx";
import LoginBar from "./components/AccountsUIWrapper";
import "./App.css";
import ShoppingButton from "./components/ShoppingListButton.jsx";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="AppContainer">
        <div className="left-section">
          <div className="user-section">
            <LoginBar />
            <ShoppingButton currentUser={this.props.currentUser} />
          </div>
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
            <CardList currentUser={this.props.currentUser} />
          </div>
          <div className="new-post-fab">
            <FreshModal currentUser={this.props.currentUser} />
          </div>
        </div>
      </div>
    );
  }
}
export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(App);
