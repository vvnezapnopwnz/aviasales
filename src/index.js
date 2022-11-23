import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore } from 'redux'
import reduxThunk from 'redux-thunk'

import { fetchTicketsIfNeeded } from './actions'
import { App } from './components/App'
import './index.css'
import rootReducer from './reducers'
import aviasalesService from './services/aviasalesService'

export const aviasales = new aviasalesService()

const actionSanitizer = (action) =>
  action.type === 'FILE_DOWNLOAD_SUCCESS' && action.data ? { ...action, data: '<<LONG_BLOB>>' } : action

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionSanitizer,
        stateSanitizer: (state) => (state.data ? { ...state, data: '<<LONG_BLOB>>' } : state),
      })
    : compose

const loggerMiddleware = () => (next) => (action) => {
  const result = next(action)
  return result
}

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)))
store.dispatch(fetchTicketsIfNeeded())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
