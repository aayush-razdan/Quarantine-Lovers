import { MODIFY_AVGGPA } from "../actions/types";
const initialState = {
  averageGPA: 0,
};
const gpaReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_AVGGPA: {
      state.averageGPA = action.avgGPA;
    }

    default:
      return state;
  }
};

export default gpaReducer;
