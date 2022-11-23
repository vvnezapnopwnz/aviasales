import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import { AsideFilter } from '../AsideFilter'
import { Header } from '../Header'
import { ProgressBar } from '../ProgressBar'
import { ShowMoreButton } from '../ShowMoreButton'
import { TabButtons } from '../TabButtons'
import { TicketsList } from '../TicketsList'
import classes from './App.module.scss'

function App({ counter }) {
  let haveProgress = counter.status === 'loaded' ? null : <ProgressBar bgcolor="#ff00ff" />
  return (
    <div className={classes.App}>
      <Header />
      <main className={classes.Main}>
        <AsideFilter />
        <section className={classes.Main_Content}>
          <TabButtons />
          {haveProgress}
          <TicketsList />
          <ShowMoreButton />
        </section>
      </main>
    </div>
  )
}

App.defaultProps = {
  counter: {
    status: '',
    progress: 0,
  },
}

App.propTypes = {
  counter: PropTypes.shape({
    progress: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  })
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, actions)(App)
