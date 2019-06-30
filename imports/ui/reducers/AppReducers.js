import { combineReducers } from "redux";
import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  UPDATE_THUMBS_RATING,
  UPDATE_STAR_RATING,
  ADD_ITEM_SUCCESS,
  GET_DROPDOWN_ITEMS,
  ADD_NEW_DROPDOWN_ITEM
} from "../actions/AppActions.js";

const initialState = {
  items: [],
  loading: false,
  error: null
};

const initialItemState = {
  itemOptions: []
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
        items: action.payload.items
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
          data.ratingCount = action.payload.item.ratingCount;
        }
      });
      return newState;

    case UPDATE_STAR_RATING:
      let newStarState = { ...state };
      newStarState.items.map(data => {
        if (data._id === action.payload.item._id) {
          data.rating = action.payload.item.rating;
        }
      });
      return newStarState;

    default:
      return state;
  }
};

const itemSetReducer = (state = initialItemState, action) => {
  switch (action.type) {
    case GET_DROPDOWN_ITEMS:
      return {
        ...state,
        itemOptions: action.payload.items
      };

    case ADD_NEW_DROPDOWN_ITEM:
      return {
        ...state,
        itemOptions: state.itemOptions.concat(action.payload.item)
      };
    default:
      return state;
  }
};

export default combineReducers({
  items: itemReducer,
  itemSet: itemSetReducer
});
