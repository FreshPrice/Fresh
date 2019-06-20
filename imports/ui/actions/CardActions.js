export const FETCH_ITEMS_BEGIN = "FETCH_ITEMS_BEGIN";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const addItem = item => {
  return fetchItemsSuccess(item);

  // TODO: Replace with below when backend added
  // Replace with below for w
  // return async dispatch => {
  //     dispatch(fetchItemsBegin());
  //     return fetch("http://localhost:3000/items", {
  //             method: "POST",
  //             body: JSON.stringify(item),
  //             headers: {
  //                 "Content-Type": "application/json"
  //             }
  //         })
  //         .then(res => res.json())
  //         .then(json => {
  //             dispatch(fetchItemsSuccess(json));
  //         })
  //         .catch(error => dispatch(fetchItemsFailure(error)));
  // };
};

export const getItems = () => {
  // TODO: Replace with below when backend added
  // return dispatch => {
  //     dispatch(fetchItemsBegin());
  //     return fetch("http://localhost:3000/items")
  //         .then(res => res.json())
  //         .then(json => {
  //             dispatch(fetchItemsSuccess(json));
  //         })
  //         .catch(error => dispatch(fetchItemsFailure(error)));
  // };
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

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: {
    error
  }
});
