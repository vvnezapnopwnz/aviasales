const initialState =  [
  { id: 1, filterName: "Все", active: false },
  { id: 2, filterName: "Без пересадок", active: false },
  { id: 3, filterName: "1 пересадка", active: false },
  { id: 4, filterName: "2 пересадки", active: false },
  { id: 5, filterName: "3 пересадки", active: false },
]


const filterReducer = (state = initialState, action) => {
// const { counter } = state;
// console.log(state)
switch (action.type) {
  case "SHOW_ALL":
    const isActive = state[0].active;
    return state.map((filter) => {
        filter.active = !isActive;
        return filter;
      })
  case "SHOW_CURRENT":
    // console.log('show_current')
    let isAllActive = true;
    const remainingFilters = state.slice(1).map((filter) => {
      if (filter.id === action.filterId) {
        filter.active = !filter.active;
      }
      if (filter.active !== true) {
        isAllActive = false;
      }
      return filter;
    });
    return [
        { ...state[0], active: isAllActive },
        ...remainingFilters,
      ]
      case 'ASYNC_INC':
        return state.map((filter) => {
            filter.active = false;
            return filter;
          })
  default:
    return state;
}
};

export default filterReducer;
