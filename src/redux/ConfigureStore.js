import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import { signupReducer, loginReducer } from "./authentication/reducer";

const reducers = combineReducers({
  ...signupReducer,
  ...loginReducer,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk, promise))
  );
  return store;
};
