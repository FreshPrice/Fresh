import React, { Component } from "react";
import Card from "./Card";
import SelectBar from "./SelectBar";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { item: "Bananas", price: "$0.99" },
        { item: "Apples", price: "$1.39" },
        { item: "Oranges", price: "$1.99" }
      ]
    };
  }
  render() {
    return (
      <div id="CardList">
        <SelectBar className="search-bar" />
        {/* TODO: add filter */}
        {this.state.data.map((post, i) => {
          return <Card post={post} key={i}/>;
        })}
      </div>
    );
  }
}

export default CardList;
