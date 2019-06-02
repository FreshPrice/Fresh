import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";
import FreshModal from "./Modal.jsx";

class CardList extends Component {
  render() {
    return (
      <div id="CardList">
        <Search />
        {/* TODO: add filter|search button */}
        <Card />
        <Card />
        <FreshModal />
      </div>
      // TODO: Add new card button
    );
  }
}

export default CardList;
