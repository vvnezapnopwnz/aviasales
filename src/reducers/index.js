import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'

const initalState = {
  filters: [
    { id: 1, filterName: "Все", active: false },
    { id: 2, filterName: "Без пересадок", active: false },
    { id: 3, filterName: "1 пересадка", active: false },
    { id: 4, filterName: "2 пересадки", active: false },
    { id: 5, filterName: "3 пересадки", active: false },
  ],
};

const rootReducer = (state = initalState, action) => {
  console.log("reducer", action, state);
  switch (action.type) {
    case "SHOW_ALL":
      const isActive = state.filters[0].active;
      return {
        ...state,
        filters: state.filters.map((filter) => {
          filter.active = !isActive;
          return filter;
        }),
      };
    case "SHOW_CURRENT":
      let isAllActive = true;
      const remainingFilters = state.filters.slice(1).map((filter) => {
        if (filter.filterName === action.filterName) {
          filter.active = !filter.active;
        }
        if (filter.active !== true) {
          isAllActive = false;
        }
        return filter;
      });
      return {
        ...state,
        filters: [
          { ...state.filters[0], active: isAllActive },
          ...remainingFilters,
        ],
      };
    default:
      return state;
  }
};
export default rootReducer;


