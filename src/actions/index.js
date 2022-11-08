import aviasalesService from "../services/aviasalesService";

export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const rnd = () => {
  const payload = Math.floor(Math.random() * 10);
  return { type: "RND", payload };
};

export const onFilterChange = (filterId) => {
//   console.log("onFilterChange", filterId);
  const type = filterId === 1 ? "SHOW_ALL" : 'SHOW_CURRENT'
  return{ type, filterId };

};

export const asyncInc = (payload) => {
  const type = 'ASYNC_INC'
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: type, payload})
    }, 3000)
  };
}



const aviasales = new aviasalesService();

export const getTicketsAsync = () => {
  const type = 'GET_TICKETS_ASYNC'
  return dispatch => {
    aviasales
    .getSearchId()
    .then((resources) => aviasales.getTickets(resources))
    .then((resources) => {
      // console.log(resources)
        dispatch({ type: type, payload: resources })
    });
  }
}