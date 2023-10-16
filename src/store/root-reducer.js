import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  // name of reducer slice and reducer function
  user: userReducer,
});
