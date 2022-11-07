import React from "react";
import classes from "./TicketsList.module.scss";
import { SingleTicket } from "../SingleTicket";

export default function TicketsList() {
  return (
    <ul className={classes["tickets__list"]}>
      <SingleTicket />
      {/* {
      todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
      ))
      } */}
    </ul>
  );
}
 