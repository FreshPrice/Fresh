import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui/dist/semantic.min.css";
import {
  addItemToDropdown,
  getDropwdownItems,
  getItems
} from "../actions/AppActions.js";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    this.props.getDropwdownItems();
  }

  filterPostsForKey = searchValue => {
    let filter = { name: searchValue };
    if (searchValue === "") {
      this.props.getItems({});
    } else {
      this.props.getItems(filter);
    }
  };

  addNewItem = newItem => {
    if (!this.props.dropwdownItems.some(e => e.value === newItem)) {
      let dropdownItem = {
        text: newItem,
        value: newItem
      };
      this.props.addItemToDropdown(dropdownItem);
    }
  };

  render() {
    return (
      <div>
        <Dropdown
          placeholder={this.props.placeholder}
          selectOnBlur={false}
          fluid
          search
          selection
          lazyLoad
          clearable
          noResultsMessage="Not found."
          allowAdditions={this.props.allowAddOptions}
          onAddItem={(event, data) => this.addNewItem(data.value)}
          onChange={
            this.props.onChange
              ? (event, data) => this.filterPostsForKey(data.value)
              : (event, data) => this.props.onValueUpdate(data.value)
          }
          options={this.props.dropwdownItems}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { dropwdownItems: state.itemSet.itemOptions };
};

export default connect(
  mapStateToProps,
  { addItemToDropdown, getDropwdownItems, getItems }
)(SearchBar);
