import { MODIFY_BRANCH } from "../actions/types";
const initialState = {
  branchId: null,
  branch: null,
};
const branchReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_BRANCH: {
      state.branchId = action.id;
      state.branch = action.branch;
    }
    default:
      return state;
  }
};

export default branchReducer;
