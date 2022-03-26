import { applyMiddleware, createStore, combineReducers } from "redux";
import searchReducer from "../reducer/search";
import thunk from "redux-thunk";
import usersReducer from "../reducer/users";

const rootReducer = combineReducers({
  search: searchReducer,
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
