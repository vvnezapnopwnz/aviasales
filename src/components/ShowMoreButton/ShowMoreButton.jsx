import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import classes from './ShowMoreButton.module.scss'

function ShowMoreButton({ showMoreTickets }) {
  return (
    <button onClick={() => showMoreTickets()} className={classes.Show_More_Button}>
      Показать еще 5 билетов!
    </button>
  )
}

ShowMoreButton.defaultProps = {
  showMoreTickets: () => {}
}

ShowMoreButton.propTypes = {
  showMoreTickets: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, actions)(ShowMoreButton)
