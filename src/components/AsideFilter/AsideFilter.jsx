import React from "react";
import classes from "./AsideFilter.module.scss";
// import { VisibilityFilters } from '../../actions'

export default function AsideFilter({filters, onFilterChange}) {
  // console.log(state);
  const filterCheckboxes = () => filters.map(filter => {
    return (
      <li key={filter.id}>
      <label className={classes["option__label"]}>
        <input
          className={classes["option__input"]}
          type="checkbox"
          id="checkbox-1"
          // filter={VisibilityFilters.SHOW_ALL}
          onChange={() => onFilterChange(filter.filterName)}
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
        {filterCheckboxes()}
      </ul>
    </aside>
  );
}
