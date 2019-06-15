import React, { Component } from "react";
import Card from "./Card";
import Search from "./Search";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { item: "Bananas", price: "$0.99" },
        { item: "Apple", price: "$1.39" },
        { item: "Bananas", price: "$1.99" }
      ]
    };
  }
  render() {
    return (
      <div id="CardList">
        <Search className="search-bar" />
        {/* TODO: add filter */}
        {this.state.data.map(post => {
          return <Card post={post} />;
        })}
      </div>
    );
  }
}

export default CardList;
