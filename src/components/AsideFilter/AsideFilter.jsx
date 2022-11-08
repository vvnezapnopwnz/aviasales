import React from "react";
import classes from "./AsideFilter.module.scss";
import { connect } from 'react-redux';

import * as actions from '../../actions'

function AsideFilter({filters, onFilterChange}) {
  //   console.log(filters);
    const filterCheckboxes = () => filters.map(filter => {
      return (
        <li key={filter.id}>
        <label className={classes["option__label"]}>
          <input
            className={classes["option__input"]}
            type="checkbox"
            id="checkbox-1"
            onChange={() => onFilterChange(filter.id)}
            checked={filter.active}
          />
          {filter.filterName}
        </label>
      </li>
      )
    })
  
    return (
      <aside className={classes["aside-filter"]}>
        <h3 className={classes["aside-filter__title"]}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        <ul className={classes["options-list"]}>
          { filterCheckboxes()}
        </ul>
      </aside>
    );
  }
  
  
  const mapStateToProps = (state) => {
      // const { counter } = state
      // console.log(state)
      return {
          ...state,
      }
  }
  
  // const mapDispatchToProps = (dispatch) => {
  
  //   // const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  //   // return {
  //   //   // inc: () => dispatch(inc()),
  //   //   // dec: () => dispatch(dec()),
  //   //   inc, dec,
  //   //   rnd
  //   // }
  //   return bindActionCreators(actions, dispatch)
  // }
  
  // export default connect(mapStateToProps, mapDispatchToProps)(Counter);
  export default connect(mapStateToProps, actions)(AsideFilter);
  
