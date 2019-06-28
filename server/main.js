import { Meteor } from "meteor/meteor";
import Items from "../imports/api/items.js";

Meteor.startup(() => {
  if (Items.find().count() === 0) {
    console.log("Uh oh... there's nothing here...Let's add some items.");
    let items = [
      {
        name: "Bananas",
        price: "$0.99",
        rating: 0,
        uuid: "41048778-017e-44d6-9496-6b60a7c81d8f",
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
        uuid: "7b5f84bb-a2d0-485e-98a5-a713a8578755",
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
        uuid: "fc77dc62-5078-4174-adb2-1fe4a03e10bf",
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
        uuid: "548d15cd-5ab2-4c10-bdab-cc511c11a1ca",
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
});
