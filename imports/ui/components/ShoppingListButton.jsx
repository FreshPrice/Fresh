import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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
import ConfirmEmail from "./ConfirmEmail.jsx";
import DeleteOne from "./EditList.jsx";

class ShoppingListButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      checked: this.props.checkList.checkList,
      isEditClicked: false
    };
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

  onEditClick = () => {
    this.setState({
      isEditClicked: !this.state.isEditClicked
    });
  };

  determineSource = item => {
    let image = new Image();
    image.src = item.imageSrc;
    if (!image.complete || image.height === 0) return "/images/missing.png";
    else return image.src;
  };

  sideList = (side, items) => (
    <div role="presentation" className="list-sector">
      <Typography variant="h5" id="shopping-title">
        {Meteor.user().emails[0].address}'s Shopping List
      </Typography>
      <Divider />
      <List>
        {this.props.items.shoppingList.length === 0 && (
          <Typography variant="subtitle1">
            <br />
            🍎🥑🍌🍇🥒
            <br />
            Your shopping list is currently empty... <br />
            Start adding items to your personalized shopping list! <br />
          </Typography>
        )}
        {items.map((text, index) => {
          const labelId = `checkbox-list-secondary-label-${index}`;
          return (
            <ListItem key={index}>
              <DeleteOne clicked={this.state.isEditClicked} itemId={text._id} />
              <ListItemAvatar>
                <Avatar src={this.determineSource(text)} />
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
                  onChange={this.handleToggle(text._id)}
                  checked={
                    this.props.checkList.checkList.indexOf(text._id) !== -1
                  }
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      {this.props.items.shoppingList.length !== 0 && (
        <span>
          <Divider /> <br />
          <Button variant="outlined" size="small" onClick={this.onEditClick}>
            ✏️ Edit Shopping List
          </Button>{" "}
          <ConfirmEmail />
          <br />
          <br />
          <EmailButton items={this.props.items.shoppingList} />
        </span>
      )}
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
