import { combineReducers } from "redux";
import branchReducer from "./branch";
import semReducer from "./sem";
//import yearReducer from "./year";
import gpaReducer from "./gpa";
import maths1Reducer from "./maths1";

export default combineReducers({
  branchReducer,
  semReducer,
  //yearReducer,
  gpaReducer,
  maths1Reducer,
});
