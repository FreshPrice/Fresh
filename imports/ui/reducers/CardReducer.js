import { combineReducers } from "redux";
import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  UPDATE_THUMBS_RATING,
  ADD_ITEM_SUCCESS
} from "../actions/CardActions.js";

const initialState = {
  items: [],
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
        items: action.payload.items.concat(state.items)
      };

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: [action.payload.item].concat(state.items)
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
