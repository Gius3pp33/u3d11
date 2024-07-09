import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions";


const initialState = {
  content: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        content: state.content.includes(action.payload)
          ? state.content
          : [...state.content, action.payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        content: state.content.filter((company) => company !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
