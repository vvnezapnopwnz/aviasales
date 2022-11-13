const initialState = {
  status: '',
  progress: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_TICKETS":
      return {
        status: 'loading',
        progress: Math.min(state.progress + 10, 99),
      };
    case "TICKETS_RECIEVED":
      return {
        status: 'loaded',
        progress: 100,
      };
    default:
      return state;
  }
};

export default counterReducer;
