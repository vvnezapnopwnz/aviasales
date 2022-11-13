import { aviasales } from '../index.js'

export const onFilterChange = (filterId, filters) => {
  const type = filterId === 1 ? 'SHOW_ALL' : 'SHOW_CURRENT'
  return { type, filterId, filters }
}

function fetchTickets() {
  return (dispatch) => {
    return aviasales
      .getTickets()
      .then((resources) => {
        dispatch({ type: 'REQUEST_TICKETS', payload: resources })
        const { stop } = resources
        if (stop === false) {
          return dispatch(fetchTickets())
        } else {
          dispatch({ type: 'TICKETS_RECIEVED', payload: resources })
        }
      })
      .catch(() => {
        return dispatch(fetchTickets())
      })
  }
}

export function fetchTicketsIfNeeded() {
  return (dispatch) => {
    return dispatch(fetchTickets())
  }
}

export const onTabClick = (tabName, tabData) => {
  const sameTabClicked = tabData.reduce((acc, tab) => {
    if (tab.name === tabName && tab.active === true) {
      acc = true
    }
    return acc
  }, false)
  if (sameTabClicked) {
    return { type: 'TAB_CLICK_SAME', tabName, tabData }
  } else {
    return { type: 'TAB_CLICK', tabName, tabData }
  }
}

export const showMoreTickets = () => {
  return { type: 'SHOW_MORE' }
}
