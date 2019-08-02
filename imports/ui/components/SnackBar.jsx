import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/PlaylistAdd";
import CheckedIcon from "@material-ui/icons/PlaylistAddCheck";
import MySnackbarContentWrapper from "./SnackBarContentWrapper.jsx";
import { connect } from "react-redux";
import {
  addToShoppingList,
  addNewShoppngList,
  getShoppingListItems
} from "../actions/AppActions.js";

class CustomizedSnackbars extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, item: this.props.item };
  }

  componentDidMount() {
    this.props.getShoppingListItems();
  }

  onAdd = () => {
    this.setState({ isAdded: !this.state.isAdded });
    this.setState({ open: !this.state.isAdded });
    let addOn = this.state.item;
    this.props.addToShoppingList(addOn);
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };
  render() {
    return (
      <div
        className={
          this.props.currentUser === null ? "z-index-hidden" : "add-cart-button"
        }
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "5",
          padding: "0"
        }}
      >
        <Tooltip enterDelay={500} placement="left" title="Add to Shopping Cart">
          <IconButton
            style={{ display: this.state.isAdded ? "none" : "" }}
            onClick={this.onAdd}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
        <IconButton
          style={{ display: this.state.isAdded ? "" : "none" }}
          onClick={this.onAdd}
        >
          <CheckedIcon />
        </IconButton>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="This item was successfully added!"
          />
        </Snackbar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { items: state.shoppingList };
};

export default connect(
  mapStateToProps,
  { getShoppingListItems, addToShoppingList, addNewShoppngList }
)(CustomizedSnackbars);
