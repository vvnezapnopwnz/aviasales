import React from "react";
import classes from "./SingleTicket.module.scss";

export default function SingleTicket() {
  return (
    <li className={classes["ticket-card"]}>
      <div className={classes["ticket-card__head"]}>
        <span className={classes["ticket-price"]}>13 400 Р </span>
        <img className={classes["ticket-card__logo"]} alt="logo" />
      </div>
      <table className={classes["ticket-card__table"]}>
        <thead className={classes["table__head"]}>
          <tr>
            <th>MOW – HKT</th>
            <th>В пути</th>
            <th>2 пересадки</th>
          </tr>
        </thead>
        <tbody className={classes["table__body"]}>
          <tr>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
        </tbody>
        <thead className={classes["table__head"]}>
          <tr>
            <th>MOW – HKT</th>
            <th>В пути</th>
            <th>2 пересадки</th>
          </tr>
        </thead>
        <tbody className={classes["table__body"]}>
          <tr>
            <td>10:45 – 08:00</td>
            <td>21ч 15м</td>
            <td>HKG, JNB</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}
