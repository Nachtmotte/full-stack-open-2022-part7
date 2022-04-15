const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return { message: action.data.message, type: action.data.type };
    case "HIDE":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
