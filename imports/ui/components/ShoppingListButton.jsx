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
import Button from "@material-ui/core/Button";
import EmailButton from "./EmailButton.jsx";
import { connect } from "react-redux";
import {
  getShoppingListItems,
  addNewShoppngList,
  addToCheckedList,
  getCheckListItems
} from "../actions/AppActions.js";
import "./ShoppingListButton.css";

class ShoppingListButton extends Component {
  constructor(props) {
    super(props);
    this.state = { left: false, checked: this.props.checkList.checkList };
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
    this.props.getCheckListItems();
    this.setState({ checked: this.props.checkList.checkList });
    this.setState({ ...this.state, [side]: open });
  };
  handleToggle = value => () => {
    const currentIndex = this.props.checkList.checkList.indexOf(value);
    const newChecked = [...this.props.checkList.checkList];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.props.addToCheckedList(newChecked);
  };

  sideList = (side, items) => (
    <div
      role="presentation"
      onKeyDown={this.toggleDrawer(side, false)}
      className="list-sector"
    >
      <Typography variant="h6" id="shopping-title">
        Here is {Meteor.user().emails[0].address}'s shopping list
      </Typography>
      <Divider />
      <List>
        {this.props.items.shoppingList.length === 0 ? (
          <IconButton>Start adding items to your shopping list!</IconButton>
        ) : (
          ""
        )}
        {items.map((text, index) => {
          const labelId = `checkbox-list-secondary-label-${index}`;
          return (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={text.imageSrc} />
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
                  checked={this.props.checkList.checkList.indexOf(index) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <EmailButton items={this.props.items.shoppingList} />
    </div>
  );

  render() {
    const items = this.props.items.shoppingList;
    return (
      <span>
        {this.props.currentUser && (
          <span>
            <Button
              variant="outlined"
              size="small"
              className={"shoppinglist-button"}
              onClick={this.toggleDrawer("left", true)}
            >
              <ListIcon className="shoppinglist-icon" />
              Shopping List
            </Button>
            <Drawer
              open={this.state.left}
              onClose={this.toggleDrawer("left", false)}
            >
              {this.sideList("left", items)}
            </Drawer>
          </span>
        )}
      </span>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.shoppingList, checkList: state.checkList };
};

export default connect(
  mapStateToProps,
  {
    getShoppingListItems,
    addNewShoppngList,
    addToCheckedList,
    getCheckListItems
  }
)(ShoppingListButton);
