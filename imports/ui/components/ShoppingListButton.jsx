import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/LocalGroceryStore";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import {
  getShoppingListItems,
  addNewShoppngList
} from "../actions/AppActions.js";
import { Meteor } from "meteor/meteor";
import "./ShoppingListButton.css";

class ShoppingListButton extends Component {
  constructor(props) {
    super(props);
    this.state = { left: false, checked: [] };
  }

  componentDidMount() {
    this.props.getShoppingListItems();
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

  handleClick = () => {
    let newShoppingList = {
      createdBy: Meteor.userId(),
      shoppingList: [],
      createdAt: new Date()
    };
    this.props.addNewShoppngList(newShoppingList);
    this.setState({ alreadyCreated: true });
  };

  handleToggle = value => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({ checked: newChecked });
  };

  sideList = (side, items) => (
    <div
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
      className="list-sector"
    >
      <Typography variant="h6" id="shopping-title">
        Your personalized shopping list
      </Typography>
      <Divider />
      <List>
        {this.props.items.shoppingList.length === 0 ? (
          <IconButton
            style={{ display: this.state.alreadyCreated ? "none" : "" }}
            onClick={this.handleClick}
          >
            Your shopping list is empty. Create a new shopping list by clicking
            this area.
          </IconButton>
        ) : (
          ""
        )}
        {items.map((text, index) => {
          const labelId = `checkbox-list-secondary-label-${index}`;
          return (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={text.imageSrc}
                />
              </ListItemAvatar>
              <ListItemText
                primary={text.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {"$ " + text.price + " " + text.unit}
                    </Typography>
                    {" " + text.location.address}
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={this.handleToggle(index)}
                  checked={this.state.checked.indexOf(index) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  render() {
    const items = this.props.items.shoppingList;
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
          {this.sideList("left", items)}
        </Drawer>
      </span>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.shoppingList };
};

export default connect(
  mapStateToProps,
  { getShoppingListItems, addNewShoppngList }
)(ShoppingListButton);
