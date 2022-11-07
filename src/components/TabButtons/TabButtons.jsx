import React from "react";
import classes from "./TabButtons.module.scss";


export default function TabButtons () {
  
      return (
        <div className={classes['main-tabs']}>
        <button
          className={classes['main-tabs__button']}
          type="checkbox"
        >
          Самый дешевый
        </button>
        <button className={classes['main-tabs__button']} type="checkbox">
          Самый быстрый
        </button>
        <button className={classes['main-tabs__button']} type="checkbox">
          Оптимальный
        </button>
      </div>
      );
  }
  