import { combineReducers } from "redux";
import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from "../actions/CardActions.js";

const initialState = {
  items: [
    {
      name: "Bananas",
      price: "$0.99",
      uuid: "41048778-017e-44d6-9496-6b60a7c81d8f",
      location: {
        coords: {
          lat: 49.286682,
          lng: -123.139346
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
