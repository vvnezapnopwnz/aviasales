const initialState = {
  tickets: [],
  ticketsToShow: 5,
}

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TICKETS':
      let newState = state.tickets.concat(action.payload.tickets)
      return { ...state, tickets: newState }
    case 'TAB_CLICK':
      let sortedTickets
      if(action.tabName === 'cheap') {
        sortedTickets = state.tickets.sort((a, b) => {
          return a.price - b.price
        })
      } else if(action.tabName === 'fast') {
        sortedTickets = state.tickets.sort((a, b) => {
          const overalDuration = ({ segments }) => segments.reduce((acc, {duration}) => acc + duration, 0) 
          return overalDuration(a) - overalDuration(b)
        })
      } else {
        sortedTickets = state.tickets
      }
      return {
        ...state,
        tickets: sortedTickets
      }
    case 'SHOW_MORE':
      return { ...state, ticketsToShow: state.ticketsToShow + 5}
    default:
      return state
  }
}

export default ticketsReducer
