import { combineReducers } from "redux";
import branch from "./branch";
import sem from "./sem";
import year from "./year";

export default combineReducers({
  branch,
  sem,
  year,
});
