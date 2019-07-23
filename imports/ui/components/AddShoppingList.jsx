import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/PlaylistAdd";
import CheckedIcon from "@material-ui/icons/PlaylistAddCheck";

class AddShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = { isFav: false };
  }

  onFavPressed = () => {
    this.setState({ isFav: !this.state.isFav });
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
      </div>
    );
  }
}

export default AddShoppingList;
