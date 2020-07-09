import { MODIFY_MATHS1 } from "../actions/types";
const initialState = {
  maths1Attendance: 0,
  totClass: 40,
  uptoClass: 0,
  attClass: 0,
};
const maths1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_MATHS1: {
      state.maths1Attendance = action.per;
      state.totClass = action.totclass;
      state.uptoClass = action.upclass;
      state.attClass = action.attclass;
    }

    default:
      return state;
  }
};

export default maths1Reducer;
