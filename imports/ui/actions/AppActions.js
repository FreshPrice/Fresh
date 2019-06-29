export const FETCH_ITEMS_BEGIN = "FETCH_ITEMS_BEGIN";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";
export const UPDATE_THUMBS_RATING = "UPDATE_THUMBS_RATING";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const GET_DROPDOWN_ITEMS = "GET_DROPDOWN_ITEMS";
export const ADD_NEW_DROPDOWN_ITEM = "ADD_NEW_DROPDOWN_ITEM";

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

export const getItems = () => {
  return async dispatch => {
    dispatch(fetchItemsBegin());
    return Meteor.call("getItems", (err, res) => {
      if (err) {
        dispatch(fetchItemsFailure(err));
      } else {
        //Callback "res" is the Array of items in most recently added order
        dispatch(fetchItemsSuccess(res));
      }
    });
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

export const addNewDropdownItem = item => {
  return {
    type: ADD_NEW_DROPDOWN_ITEM,
    payload: {
      item
    }
  };
};
