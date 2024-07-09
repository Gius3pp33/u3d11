const initialState = {
  favourites: {
    content: [],
  },
  jobs: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: action.payload,
        },
      };

    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.includes(action.payload)
            ? state.favourites.content
            : [...state.favourites.content, action.payload],
        },
      };

    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (company) => company !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
