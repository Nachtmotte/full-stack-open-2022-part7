const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.data;
    case "SET_USER":
      return action.data;
    case "LOGOUT": {
      return null;
    }
    default:
      return state;
  }
};

export default reducer;
