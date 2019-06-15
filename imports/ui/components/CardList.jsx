import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";
import SearchBar from './SearchBar';

class CardList extends Component {
  render() {
    return (
      <div id="CardList">
        
        <SearchBar className="search-bar" />
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
