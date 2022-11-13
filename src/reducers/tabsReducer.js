const initialState = {
  tabs: [
    { name: 'cheap', description: 'Самый дешевый', active: false },
    { name: 'fast', description: 'Самый быстрый', active: false },
    { name: 'optimum', description: 'Оптимальный', active: false },
  ],
  previousDataContainer: [],
}

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TICKETS':
      let newState = state.previousDataContainer.concat(action.payload.tickets)
      return { ...state, previousDataContainer: newState }

    case 'TAB_CLICK':
      return {
        ...state,
        tabs: state.tabs.map((tab) => {
          if (tab.name === action.tabName) {
            tab.active = !tab.active
          } else {
            tab.active = false
          }
          return tab
        }),
      }
    case 'TAB_CLICK_SAME':
      return {
        ...state,
        tabs: state.tabs.map((tab) => {
          tab.active = false
          return tab
        }),
      }
    default:
      return state
  }
}

export default tabsReducer
