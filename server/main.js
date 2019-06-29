import { Meteor } from "meteor/meteor";
import Items from "../imports/api/items.js";
import DropdownItems from "../imports/api/dropdownItems.js";

Meteor.startup(() => {
  if (Items.find().count() === 0) {
    console.log("Uh oh... there's nothing here...Let's add some items.");
    let items = [
      {
        name: "Bananas",
        price: "$0.99",
        rating: 0,
        createdAt: new Date(),
        location: {
          coords: {
            lat: 49.286682,
            lng: -123.139346
          }
        }
      },
      {
        name: "Apples",
        price: "$1.99",
        rating: 0,
        createdAt: new Date(),
        location: {
          coords: {
            lat: 49.290331,
            lng: -123.134111
          }
        }
      },
      {
        name: "Pears",
        price: "$2.99",
        rating: 0,
        createdAt: new Date(),
        location: {
          coords: {
            lat: 49.290198,
            lng: -123.13234
          }
        }
      },
      {
        name: "Oranges",
        price: "$1.50",
        rating: 0,
        createdAt: new Date(),
        location: {
          coords: {
            lat: 49.290254,
            lng: -123.132653
          }
        }
      }
    ];

    items.forEach(item => {
      console.log("Adding: " + item.name);
      Items.insert(item);
    });
  }

  if (DropdownItems.find().count() === 0) {
    console.log(
      "Uh oh... there's nothing here...Let's add some dropwdown items."
    );
    let dropdownItems = [
      {
        text: "Bananas",
        value: "Bananas"
      },
      {
        text: "Apples",
        value: "Apples"
      },
      {
        text: "Oranges",
        value: "Oranges"
      }
    ];

    dropdownItems.forEach(item => {
      console.log("Adding dropwdown: " + item.text);
      DropdownItems.insert(item);
    });
  }
});

Meteor.methods({
  addItem: newItem => {
    let _id = Items.insert(newItem);
    console.log("New Item added with ID: " + _id);
    return _id;
  }
});

Meteor.methods({
  getItems: () => {
    return Items.find({}, { sort: { createdAt: -1 } }).fetch();
  }
});

Meteor.methods({
  updateItemRating: item => {
    return Items.update({ _id: item._id }, item);
  }
});

Meteor.methods({
  getDropwdownItems: () => {
    return DropdownItems.find({}).fetch();
  }
});

Meteor.methods({
  addItemToDropdown: item => {
    return DropdownItems.insert(item);
  }
});
