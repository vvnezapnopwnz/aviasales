import PropTypes from 'prop-types'
import React from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import classes from "./TabButtons.module.scss";

function TabButtons({tabsData, onTabClick}) {

  const { tabs } = tabsData;

  const showTabs = tabs.map((tab, index) => (
      <React.Fragment key={index}>
      <input onChange={() => onTabClick(tab.name, tabs)}
      checked={tab.active}
      id={tab.name} className={classes["main-tabs__input"]} type="checkbox"/>
      <label className={[classes["main-tabs__label"], classes[`main-tabs__label-${tab.name}`]].join(' ')} htmlFor={tab.name}>
      {tab.description}
      </label>
      </React.Fragment>
    ))

  return (
    <div className={classes["main-tabs"]}>
      {showTabs}
    </div>
  );
}

TabButtons.defaultProps = {
  onTabClick: () => {},
  tabsData: {
    tabs: [],
  }
}

TabButtons.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  tabsData: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, actions)(TabButtons);
