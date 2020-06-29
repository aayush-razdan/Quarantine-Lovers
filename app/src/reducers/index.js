import { combineReducers } from "redux";
import branchReducer from "./branch";
import semReducer from "./sem";
import yearReducer from "./year";
import gpaReducer from "./gpa";

export default combineReducers({
  branchReducer,
  semReducer,
  yearReducer,
  gpaReducer,
});
