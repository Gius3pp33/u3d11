const initialState = {
  favourites: [],
  jobs:[],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.includes(action.payload)
          ? state.favourites
          : [...state.favourites, action.payload],
      };

    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter(
          (company) => company !== action.payload
        ),
      };
      case "SET_JOBS":
        return {
          ...state,
          jobs: action.payload,
        };
    
        default:
      return state;
  }
};

export default mainReducer;
