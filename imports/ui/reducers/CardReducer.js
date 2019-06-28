import { combineReducers } from "redux";
import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  UPDATE_THUMBS_RATING
} from "../actions/CardActions.js";

const initialState = {
  items: [
    {
      name: "Bananas",
      price: "$0.99",
      rating: 0,
      _id: "MCa9A7upxq2MwE8Xd",
      rating: 10,
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

    case UPDATE_THUMBS_RATING:
      let newState = { ...state };
      newState.items.map(data => {
        if (data._id === action.payload.item._id) {
          data.rating = action.payload.item.rating;
        }
      });
      return newState;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemReducer
});
