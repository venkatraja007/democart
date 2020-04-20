import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  adminReducer
});

export default rootReducer;
