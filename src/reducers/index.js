import { combineReducers } from 'redux'

import filterReducer from './filterReducer'
import counterReducer from './counterReducer'
import ticketsReducer from './ticketsReducer'
import tabsReducer from './tabsReducer'
export default combineReducers({
    filtersData: filterReducer,
    counter: counterReducer,
    ticketsData: ticketsReducer,
    tabsData: tabsReducer,
})