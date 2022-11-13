import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import classes from './AsideFilter.module.scss'

function AsideFilter({ filtersData, onFilterChange }) {

  const { filters } = filtersData
  const filterCheckboxes = () =>
    filters.map((filter) => {
      return (
        <li key={filter.id}>
          <label className={classes['option__label']}>
            <input
              className={classes['option__input']}
              type="checkbox"
              id="checkbox-1"
              onChange={() => onFilterChange(filter.id, filters)}
              checked={filter.active}
            />
            {filter.filterName}
          </label>
        </li>
      )
    })

  return (
    <aside className={classes['aside-filter']}>
      <h3 className={classes['aside-filter__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <ul className={classes['options-list']}>{filterCheckboxes()}</ul>
    </aside>
  )
}

AsideFilter.defaultProps = {
  tabsData: {
    tabs: [],
    previousDataContainer: []
  },
  filtersData: {
    filters: [],
    filterInitialized: false,
  },
  ticketsData: {
    tickets: [],
    ticketsToShow: 5
  }
}

AsideFilter.propTypes = {
  filtersData: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, actions)(AsideFilter)
