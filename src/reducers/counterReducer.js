const initialState = 0;
const counterReducer = (state = initialState, action) => {
  // console.log(state)
  switch (action.type) {
    case "RND":
      // console.log(action.payload, counter)
      return state + action.payload;
    case "INC":
      console.log(state);
      return state + 1;
    case "DEC":
      return state - 1;
    case "ASYNC_INC":
      return state + action.payload;
    default:
      return state;
  }
};

export default counterReducer;
