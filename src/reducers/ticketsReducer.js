const initialState = [];

const ticketsReducer = (state = initialState, action) => {
  // console.log(state)
  switch (action.type) {
    case "@@INIT":
        // console.log("@@INIT", action)
      return state;
    case "GET_TICKETS_ASYNC":
        console.log(action)
      return state.concat(action.payload.tickets);
    default:
      return state;
  }
};

export default ticketsReducer;
