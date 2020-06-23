import { MODIFY_SEM } from "../actions/types";
const initialState = {
  semId: null,
};
const semReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_SEM: {
      state.semId = action.id;
    }
    default:
      return state;
  }
};

export default semReducer;
