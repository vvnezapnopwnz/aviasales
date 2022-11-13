import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import { SingleTicket } from '../SingleTicket'
import classes from './TicketsList.module.scss'

function TicketsList({ ticketsData, tabsData, filtersData }) {
  const { filters, filterInitialized } = filtersData
  const { tickets, ticketsToShow } = ticketsData

  const ticketsToRender =
    tabsData.tabs.find((tab) => tab.active === true && tab.name !== 'optimum') !== undefined
      ? tickets
      : tabsData.previousDataContainer
  const activeFilters = filters.filter((filter) => filter.active)
  const stopsCount = {
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  }
  const filteredTickets = ticketsToRender.filter((ticket) => {
    const { segments } = ticket
    const segmentsStops = segments.some((segment) => {
      let stopsTypeName = stopsCount[segment.stops.length]
      if (activeFilters.map((filter) => filter.filterName).includes(stopsTypeName)) {
        return true
      } else {
        return false
      }
    })
    return segmentsStops
  })
  const slicedTickets = filterInitialized
    ? filteredTickets.slice(0, ticketsToShow)
    : ticketsToRender.slice(0, ticketsToShow)
  if (slicedTickets.length === 0) {
    return (
      <div className={classes['alert__message']}>
        <strong>Не найдено!</strong> По вашему запросу билетов не найдено.
      </div>
    )
  }
  return (
    <ul className={classes['tickets__list']}>
      {slicedTickets.map((ticket, index) => (
        <SingleTicket ticket={{ index, ...ticket }} key={index} />
      ))}
    </ul>
  )
}

TicketsList.defaultProps = {
  tabsData: {
    tabs: [],
    previousDataContainer: [],
  },
  filtersData: {
    filters: [],
    filterInitialized: false,
  },
  ticketsData: {
    tickets: [],
    ticketsToShow: 5,
  },
}

TicketsList.propTypes = {
  tabsData: PropTypes.object.isRequired,
  ticketsData: PropTypes.object.isRequired,
  filtersData: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, actions)(TicketsList)
