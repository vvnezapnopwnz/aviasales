const initialState =  {
  filters: [
  { id: 1, filterName: "Все", active: false },
  { id: 2, filterName: "Без пересадок", active: false },
  { id: 3, filterName: "1 пересадка", active: false },
  { id: 4, filterName: "2 пересадки", active: false },
  { id: 5, filterName: "3 пересадки", active: false },
], 
  filterInitialized: false,
}


const filterReducer = (state = initialState, action) => {
switch (action.type) {
  case "SHOW_ALL":
    const isActive = state.filters[0].active;
    return { filters: state.filters.map((filter) => {
        filter.active = !isActive;
        return filter;
      }), filterInitialized: false}
  case "SHOW_CURRENT":
    let isAllActive = true;
    const remainingFilters = state.filters.slice(1).map((filter) => {
      if (filter.id === action.filterId) {
        filter.active = !filter.active;
      }
      if (filter.active !== true) {
        isAllActive = false;
      }
      return filter;
    });
    return { filters: [
        { ...state.filters[0], active: isAllActive },
        ...remainingFilters,
      ], filterInitialized: true
    }
  default:
    return state;
}
};

export default filterReducer;
