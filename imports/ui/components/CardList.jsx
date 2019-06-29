import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { getItems } from "../actions/AppActions.js";

class CardList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getItems({});
  }

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
        {/* TODO: add filter */}
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
  { getItems }
)(CardList);
