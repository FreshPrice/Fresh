import { combineReducers } from "redux";
import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from "../actions/CardActions.js";

const initialState = {
  items: [
    {
      item: "Bananas",
      price: "$0.99",
      uuid: "41048778-017e-44d6-9496-6b60a7c81d8f",
      location: {
        address: "Vancouver",
        coords: {
          lat: 49.286682,
          lng: -123.139346
        }
      }
    },
    {
      item: "Apples",
      price: "$1.99",
      uuid: "7b5f84bb-a2d0-485e-98a5-a713a8578755",
      location: {
        coords: {
          address: "Vancouver",
          lat: 49.290331,
          lng: -123.134111
        }
      }
    },
    {
      item: "Pears",
      price: "$2.99",
      uuid: "fc77dc62-5078-4174-adb2-1fe4a03e10bf",
      location: {
        coords: {
          address: "Vancouver",
          lat: 49.290198,
          lng: -123.13234
        }
      }
    },
    {
      item: "Oranges",
      price: "$1.50",
      uuid: "548d15cd-5ab2-4c10-bdab-cc511c11a1ca",
      location: {
        coords: {
          address: "Vancouver",
          lat: 49.290254,
          lng: -123.132653
        }
      }
    }
  ],
  loading: false,
  error: null
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: [action.payload.items].concat(state.items)
      };

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default combineReducers({
  items: itemReducer
});
