export const FETCH_ITEMS_BEGIN = "FETCH_ITEMS_BEGIN";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";
export const UPDATE_THUMBS_RATING = "UPDATE_THUMBS_RATING";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const GET_DROPDOWN_ITEMS = "GET_DROPDOWN_ITEMS";
export const ADD_NEW_DROPDOWN_ITEM = "ADD_NEW_DROPDOWN_ITEM";
export const ADD_NEW_SHOPPING_LIST = "ADD_NEW_SHOPPING_LIST";
export const GET_SHOPPING_LIST_ITEMS = "GET_SHOPPING_LIST_ITEMS";
export const UPDATE_SHOPPING_LIST = "UPDATE_SHOPPING_LIST";
export const UPDATE_CHECK_LIST = "UPDATE_CHECK_LIST";
export const GET_CHECK_LIST = "GET_CHECK_LIST";
export const DELETE_ALL_SHOPPING_LIST = "DELETE_ALL_SHOPPING_LIST";
export const DELETE_ALL_CHECK_LIST = "DELETE_ALL_CHECK_LIST";

export const addItem = item => {
  return async dispatch => {
    dispatch(fetchItemsBegin());
    return Meteor.call("addItem", item, (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        //Callback "res" is the ID of the successfully added item
        item._id = res;
        dispatch(addItemSuccess(item));
      }
    });
  };
};

export const getItems = filter => {
  return async dispatch => {
    dispatch(fetchItemsBegin());
    return Meteor.call("getItems", filter, (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        //Callback "res" is the Array of items in most recently added order
        dispatch(fetchItemsSuccess(res));
      }
    });
  };
};

export const sortItems = items => {
  return dispatch => {
    dispatch(fetchItemsSuccess(items));
  };
};

export const changeRating = item => {
  return async dispatch => {
    return Meteor.call("updateItemRating", item, (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        dispatch(updateThumbsRating(item));
      }
    });
  };
};

export const getDropwdownItems = () => {
  return async dispatch => {
    dispatch(fetchItemsBegin());
    return Meteor.call("getDropwdownItems", (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        //Callback "res" is the Array of items in most recently added order
        dispatch(fetchDropdownItemsSuccess(res));
      }
    });
  };
};

export const addItemToDropdown = item => {
  return async dispatch => {
    return Meteor.call("addItemToDropdown", item, (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        //Callback "res" is the ID of the successfully added item
        dispatch(addNewDropdownItem(item));
      }
    });
  };
};

export const addNewShoppngList = item => {
  return async dispatch => {
    dispatch(fetchItemsBegin());
    return Meteor.call("addNewShoppingList", item, (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        //Callback "res" is the ID of the successfully added item
        item._id = res;
        dispatch(addNewShoppingList(item));
      }
    });
  };
};

export const addToShoppingList = item => {
  return async dispatch => {
    return Meteor.call("updateShoppingList", item, (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        //Callback "res" is the ID of the successfully added item
        console.log(item);
        dispatch(updateShoppingList(item));
      }
    });
  };
};

export const addToCheckedList = item => {
  return async dispatch => {
    return Meteor.call("updateCheckList", item, (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        //Callback "res" is the ID of the successfully added item
        console.log(item);
        dispatch(updateCheckList(item));
      }
    });
  };
};

export const getShoppingListItems = () => {
  return async dispatch => {
    dispatch(fetchItemsBegin());
    return Meteor.call("getShoppingListItems", (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        dispatch(fetchShoppingListItemsSuccess(res));
      }
    });
  };
};

export const getCheckListItems = () => {
  return async dispatch => {
    dispatch(fetchItemsBegin());
    return Meteor.call("getCheckListItems", (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        console.log(res);
        dispatch(fetchCheckListItemsSuccess(res));
      }
    });
  };
};

export const deleteAllCheckList = () => {
  return async dispatch => {
    return Meteor.call("deleteAllCheckList", (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        dispatch(deleteCheckListSuccess());
        dispatch(deleteItemsSuccess());
      }
    });
  };
};

export const fetchItemsBegin = () => {
  return {
    type: FETCH_ITEMS_BEGIN
  };
};

export const fetchItemsSuccess = items => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: {
      items
    }
  };
};

export const fetchItemsFailure = error => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: {
      error
    }
  };
};

export const addItemSuccess = item => {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: {
      item
    }
  };
};

export const updateThumbsRating = item => {
  return {
    type: UPDATE_THUMBS_RATING,
    payload: {
      item
    }
  };
};

export const fetchDropdownItemsSuccess = items => {
  return {
    type: GET_DROPDOWN_ITEMS,
    payload: {
      items
    }
  };
};

export const fetchShoppingListItemsSuccess = items => {
  return {
    type: GET_SHOPPING_LIST_ITEMS,
    payload: {
      items
    }
  };
};

export const fetchCheckListItemsSuccess = items => {
  return {
    type: GET_CHECK_LIST,
    payload: {
      items
    }
  };
};

export const addNewDropdownItem = item => {
  return {
    type: ADD_NEW_DROPDOWN_ITEM,
    payload: {
      item
    }
  };
};

export const addNewShoppingList = item => {
  return {
    type: ADD_NEW_SHOPPING_LIST,
    payload: {
      item
    }
  };
};

export const updateShoppingList = item => {
  return {
    type: UPDATE_SHOPPING_LIST,
    payload: {
      item
    }
  };
};

export const updateCheckList = item => {
  return {
    type: UPDATE_CHECK_LIST,
    payload: {
      item
    }
  };
};

export const deleteItemsSuccess = () => {
  return {
    type: DELETE_ALL_SHOPPING_LIST
  };
};

export const deleteCheckListSuccess = () => {
  return {
    type: DELETE_ALL_CHECK_LIST
  };
};
