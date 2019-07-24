import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import AddIcon from "@material-ui/icons/PlaylistAdd";
import CheckedIcon from "@material-ui/icons/PlaylistAddCheck";
import MySnackbarContentWrapper from "./SnackBarContentWrapper.jsx";
import { connect } from "react-redux";
import { addToShoppingList } from "../actions/AppActions.js";

class CustomizedSnackbars extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, isFav: false, item: this.props.item };
  }

  onFavPressed = () => {
    this.setState({ isFav: !this.state.isFav });
    this.setState({ open: !this.state.isFav });
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
      <div>
        <IconButton
          style={{ display: this.state.isFav ? "none" : "" }}
          onClick={this.onFavPressed}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          style={{ display: this.state.isFav ? "" : "none" }}
          onClick={this.onFavPressed}
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
    { addToShoppingList }
  )(CustomizedSnackbars);
