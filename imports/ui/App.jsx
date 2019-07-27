import React, { Component } from "react";
import MapContainer from "./components/MapContainer.jsx";
import CardList from "./components/CardList.jsx";
import FreshModal from "./components/Modal.jsx";
import SearchBar from "./components/SearchBar.jsx";
import LoginBar from "./components/AccountsUIWrapper";
import "./App.css";
import ShoppingButton from "./components/ShoppingListButton";
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
          <LoginBar />
          <ShoppingButton currentUser={this.props.currentUser} />
          <div className="fresh-header">
            <img className="logo" src="/logo.png" />
          </div>
          <div className="map-container">
            <MapContainer />
          </div>
          <footer id="footer">
            2019 🛒 <a href="https://github.com/FreshPrice/Fresh">Fresh</a> by{" "}
            <a
              id="creators"
              href="https://www.linkedin.com/in/echoiubc/"
              target="_blank"
            >
              Erica
            </a>
            ,{" "}
            <a
              id="creators"
              href="https://www.linkedin.com/in/nicolehli"
              target="_blank"
            >
              Nicole
            </a>{" "}
            and{" "}
            <a
              id="creators"
              href="https://www.linkedin.com/in/yaoliu93/"
              target="_blank"
            >
              Yao
            </a>
          </footer>
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
