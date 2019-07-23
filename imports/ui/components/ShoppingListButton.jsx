import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/LocalGroceryStore";
import Typography from "@material-ui/core/Typography";
import "./ShoppingListButton.css";

class ShoppingListButton extends Component {
  constructor(props) {
    super(props);
    this.state = { left: false };
  }

  toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ ...this.state, [side]: open });
  };

  sideList = (side, classes) => (
    <div
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
      className="list-sector"
    >
      <Typography variant="h6" id="shopping-title">
        Your shopping list.
      </Typography>
      <Divider />
      <List>
        {["Apples", "Bananas", "Oranges", "Pears"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  render() {
    return (
      <span>
        {this.props.currentUser && (
          <IconButton
            className={"shopping-button"}
            onClick={this.toggleDrawer("left", true)}
          >
            <ListIcon />
          </IconButton>
        )}
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          {this.sideList("left")}
        </Drawer>
      </span>
    );
  }
}

export default ShoppingListButton;
