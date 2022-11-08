import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import counterReducer from './counterReducer'
import ticketsReducer from './ticketsReducer'
export default combineReducers({
    filters: filterReducer,
    counter: counterReducer,
    tickets: ticketsReducer
})