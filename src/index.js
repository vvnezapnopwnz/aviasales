import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)
console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
   </Provider>
)