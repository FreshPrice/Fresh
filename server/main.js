import { Meteor } from "meteor/meteor";
import Items from "../imports/api/items.js";
import DropdownItems from "../imports/api/dropdownItems.js";
import ShoppingList from "../imports/api/shoppinglist";

Meteor.startup(() => {
  if (Items.find().count() === 0) {
    console.log("Uh oh... there's nothing here...Let's add some items.");
    let items = [
      {
        name: "Bananas",
        price: 0.99,
        unit: "per lb",
        rating: 0,
        createdAt: new Date(),
        imageSrc: "/images/Bananas.png",
        location: {
          address: "Stanley Park, Vancouver, BC, Canada",
          coords: {
            lat: 49.286682,
            lng: -123.139346
          }
        }
      },
      {
        name: "Apples",
        price: 1.99,
        unit: "per kg",
        rating: 0,
        createdAt: new Date(),
        imageSrc: "/images/Apples.png",
        location: {
          address: "Deep Cove, North Vancouver, BC, Canada",
          coords: {
            lat: 49.290331,
            lng: -123.134111
          }
        }
      },
      {
        name: "Pears",
        price: 2.99,
        unit: "per lb",
        rating: 0,
        createdAt: new Date(),
        imageSrc: "/images/Pears.png",
        location: {
          address:
            "Safeway West Broadway, West Broadway, Vancouver, BC, Canada",
          coords: {
            lat: 49.290198,
            lng: -123.13234
          }
        }
      },
      {
        name: "Oranges",
        price: 1.5,
        rating: 0,
        unit: "per lb",
        createdAt: new Date(),
        imageSrc: "/images/Oranges.png",
        location: {
          address: "Safeway Robson, Robson Street, Vancouver, BC, Canada",
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
      },
      {
        text: "Pears",
        value: "Pears"
      }
    ];

    dropdownItems.forEach(item => {
      console.log("Adding dropwdown: " + item.value);
      DropdownItems.insert(item);
    });
  }

  if (ShoppingList.find({}).count() === 0) {
    console.log(
      "Uh oh... there's nothing here...Let's add some dropwdown items."
    );
    let shoppingList = [
      {
        createdBy: "",
        shoppingList: [],
        createdAt: new Date()
      }
    ];

    shoppingList.forEach(item => {
      console.log("Adding dropwdown: " + item.value);
      ShoppingList.insert(item);
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
  getItems: filter => {
    return Items.find(filter, { sort: { createdAt: -1 } }).fetch();
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

Meteor.methods({
  addNewShoppingList: item => {
    return ShoppingList.insert(item);
  }
});

Meteor.methods({
  getShoppingListItems: () => {
    return ShoppingList.find({ createdBy: Meteor.userId() }).fetch();
  }
});

Meteor.methods({
  getCheckListItems: () => {
    return ShoppingList.find({ createdBy: Meteor.userId() }).fetch();
  }
});

Meteor.methods({
  updateShoppingList: item => {
    return ShoppingList.update(
      { createdBy: Meteor.userId() },
      { $addToSet: { shoppingList: item } }
    );
  }
});

Meteor.methods({
  updateCheckList: item => {
    return ShoppingList.update(
      { createdBy: Meteor.userId() },
      { $set: { checkList: item } },
      false,
      true
    );
  }
});

Meteor.methods({
  deleteAllCheckList: () => {
    return ShoppingList.remove({
      createdBy: Meteor.userId()
    });
  }
});
