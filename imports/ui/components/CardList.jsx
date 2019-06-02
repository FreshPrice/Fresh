import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";

class CardList extends Component {
  render() {
    return (
      <div id="CardList">
        <Search />
        {/* TODO: add filter|search button */}
        <Card />
        <Card />
      </div>
      // TODO: Add new card button
    );
  }
}

export default CardList;
