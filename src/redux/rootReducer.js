import { combineReducers } from "redux";

import loginReducer from "./login/login.reducer";

export default combineReducers({
  login: loginReducer,
});
