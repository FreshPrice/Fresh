import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "/imports/ui/App.jsx";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../imports/ui/reducers/CardReducer.js";

Meteor.startup(() => {
  render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <App />
    </Provider>,
    document.getElementById("react-target")
  );
});
