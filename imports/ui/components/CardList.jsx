import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { getItems, sortItems } from "../actions/AppActions.js";

class CardList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getItems({});
  }

  sortByPricePressed = () => {
    var items = this.props.items.items;

    if (items.length > 1) {
      items.sort(function(a, b) {
        // TODO: Refactor after card with $h is remove from database
        let aValue =
          a.price.substr(1) && parseFloat(a.price.substr(1))
            ? parseFloat(a.price.substr(1))
            : 0;
        let bValue =
          b.price.substr(1) && parseFloat(b.price.substr(1))
            ? parseFloat(b.price.substr(1))
            : 0;

        // If price is the same, sort by rating
        if (aValue === bValue) {
          return a.rating - b.rating;
        } else {
          return aValue - bValue;
        }
      });

      this.props.sortItems(items);
    }
  };

  sortByLatestPressed = () => {
    var items = this.props.items.items;

    if (items.length > 1) {
      items.sort(function(a, b) {
        let aDate = new Date(a.createdAt);
        let bDate = new Date(b.createdAt);

        return bDate - aDate;
      });
    }

    this.props.sortItems(items);
  };

  render() {
    const items = this.props.items.items;

    return (
      <div id="CardList">
        <SearchBar
          className="search-bar"
          allowAddOptions={false}
          placeholder="Find Item"
          onChange={true}
        />
        {/* Sort by price and rating */}
        <p onClick={this.sortByPricePressed}>Sort by price</p>
        <p onClick={this.sortByLatestPressed}>Sort by latest</p>
        {items.map(post => {
          return <Card key={post._id} post={post} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(
  mapStateToProps,
  { getItems, sortItems }
)(CardList);
