import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { getItems, sortItems } from "../actions/AppActions.js";
import { PER_HUNDRED_GRAMS, PER_POUND, PER_KILOGRAM } from "../FreshStrings.js";

class CardList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getItems({});
  }

  sortByPricePressed = () => {
    let items = this.props.items.items;

    if (items.length > 1) {
      items.sort(function(a, b) {
        // Function must be inside here or else cannot be used because of scope
        let convertToKg = unitString => {
          switch (unitString) {
            case PER_HUNDRED_GRAMS:
              return 0.1;
            case PER_POUND:
              0.4536;
            case PER_KILOGRAM:
              return 1;
            default:
              return null;
          }
        };

        let aPriceInKg = a.price * convertToKg(a.unit);
        let bPriceInKg = b.price * convertToKg(b.unit);
        // If price is the same, sort by rating
        if (aPriceInKg.toFixed(2) === bPriceInKg.toFixed(2)) {
          return b.rating - a.rating;
        } else {
          return aPriceInKg - bPriceInKg;
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
