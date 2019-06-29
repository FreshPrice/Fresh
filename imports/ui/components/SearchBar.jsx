import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui/dist/semantic.min.css";
import { addItemToDropdown, getDropwdownItems } from "../actions/AppActions.js";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  componentDidMount() {
    this.props.getDropwdownItems();
  }

  updateSearchValue = searchValue => {
    this.setState({ searchValue: searchValue });
    console.log("Search query string now: " + searchValue);
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
          placeholder="Select..."
          fluid
          search
          selection
          lazyLoad
          clearable
          noResultsMessage="Not found."
          allowAdditions={this.props.allowAddOptions}
          onAddItem={(event, data) => this.addNewItem(data.value)}
          onChange={(event, data) => this.updateSearchValue(data.value)}
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
  { addItemToDropdown, getDropwdownItems }
)(SearchBar);
