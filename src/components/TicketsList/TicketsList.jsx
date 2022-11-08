import React from "react";
import classes from "./TicketsList.module.scss";
import { SingleTicket } from "../SingleTicket";
import { connect } from 'react-redux';

import * as actions from '../../actions'

function TicketsList({tickets}) {
  // console.log(tickets)
  return (
    <ul className={classes["tickets__list"]}>
      {/* <SingleTicket /> */}
      {
      tickets.map((ticket, index) => (
        <SingleTicket 
        ticket={{index,...ticket}}
        key={index}/>
      ))
      }
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
      ...state,
  }
}

export default connect(mapStateToProps, actions)(TicketsList);
