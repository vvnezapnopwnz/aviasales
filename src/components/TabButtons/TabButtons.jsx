import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import classes from './TabButtons.module.scss'

function TabButtons({ tabsData, onTabClick }) {
  const { tabs } = tabsData

  const showTabs = tabs.map((tab, index) => (
    <React.Fragment key={index}>
      <input
        onChange={() => onTabClick(tab.name, tabs)}
        checked={tab.active}
        id={tab.name}
        className={classes.Main_Tabs_Input}
        type="checkbox"
      />
      <label
        className={[classes['Main_Tabs_Label'], classes[`Main_Tabs_Label-${tab.name}`]].join(' ')}
        htmlFor={tab.name}
      >
        {tab.description}
      </label>
    </React.Fragment>
  ))

  return <div className={classes.Main_Tabs}>{showTabs}</div>
}

TabButtons.defaultProps = {
  onTabClick: () => {},
  tabsData: {
    tabs: [],
  },
}

TabButtons.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  tabsData: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps, actions)(TabButtons)
