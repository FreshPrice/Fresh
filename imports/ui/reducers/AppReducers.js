import { combineReducers } from "redux";
import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  UPDATE_THUMBS_RATING,
  ADD_ITEM_SUCCESS,
  GET_DROPDOWN_ITEMS,
  ADD_NEW_DROPDOWN_ITEM,
  GET_SHOPPING_LIST_ITEMS,
  ADD_NEW_SHOPPING_LIST,
  UPDATE_SHOPPING_LIST,
  UPDATE_CHECK_LIST,
  GET_CHECK_LIST
} from "../actions/AppActions.js";

const initialState = {
  items: [],
  loading: false,
  error: null
};

const initialItemState = {
  itemOptions: []
};

const initialShoppingListState = {
  shoppingList: []
};

const initialCheckListState = {
  checkList: []
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
          data.rating = action.payload.item.rating;
        }
      });
      return newState;

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

const shoppingListReducer = (state = initialShoppingListState, action) => {
  switch (action.type) {
    case GET_SHOPPING_LIST_ITEMS:
      if (action.payload.items.length === 0) {
        return {
          ...state,
          shoppingList: []
        };
      } else
        return {
          ...state,
          shoppingList: action.payload.items[0].shoppingList
        };
    case ADD_NEW_SHOPPING_LIST:
      return {
        ...state,
        shoppingList: state.shoppingList.concat(
          action.payload.item.shoppingList
        )
      };
    case UPDATE_SHOPPING_LIST:
      return {
        ...state,
        shoppingList: state.shoppingList.concat(action.payload.item)
      };
    default:
      return state;
  }
};

const checkListReducer = (state = initialCheckListState, action) => {
  switch (action.type) {
    case GET_CHECK_LIST:
      if (action.payload.items.length === 0) {
        return {
          ...state,
          checkList: []
        };
      } else {
        return {
          ...state,
          checkList: action.payload.items[0].checkList
        };
      }

    case UPDATE_CHECK_LIST:
      return {
        ...state,
        checkList: action.payload.item
      };
    default:
      return state;
  }
};

export default combineReducers({
  items: itemReducer,
  itemSet: itemSetReducer,
  shoppingList: shoppingListReducer,
  checkList: checkListReducer
});
