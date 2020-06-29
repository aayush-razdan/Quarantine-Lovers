import { MODIFY_AVGLABGPA, MODIFY_AVGSUBGPA } from "../actions/types";
const initialState = {
  averageLabGpa: 0,
  averageSubGpa: 0,
};
const gpaReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_AVGSUBGPA: {
      state.averageSubGpa = action.avgSubjects;
    }
    case MODIFY_AVGLABGPA: {
      state.averageLabGpa = action.avgLabs;
    }

    default:
      return state;
  }
};

export default gpaReducer;
