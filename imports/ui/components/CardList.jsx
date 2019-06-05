import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";

class CardList extends Component {
  render() {
    return (
      <div id="CardList">
        <Search className="search-bar" />
        {/* TODO: add filter|search button */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default CardList;
