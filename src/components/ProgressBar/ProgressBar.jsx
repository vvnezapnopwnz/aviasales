import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import classes from './ProgressBar.module.scss'

const ProgressBar = ({ counter }) => {
  return (
    <div className={classes.Progressbar}>
      <div className={classes.Progressbar_Line} style={{ width: `${counter.progress}%` }}></div>
    </div>
  )
}

ProgressBar.defaultProps = {
  counter: {
    status: '',
    progress: 0,
  },
}

ProgressBar.propTypes = {
  counter: PropTypes.shape({
    progress: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }),
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, actions)(ProgressBar)
