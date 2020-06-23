import { MODIFY_YEAR } from "../actions/types";

const initialState = {
  yearId: null,
  year: null,
};
const yearReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_YEAR: {
      state.yearId = action.id;
      state.year = action.year;
    }
    default:
      return state;
  }
};

export default yearReducer;
