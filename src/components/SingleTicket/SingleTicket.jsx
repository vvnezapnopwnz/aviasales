import React from "react";
import classes from "./SingleTicket.module.scss";

export default function SingleTicket({index,ticket}) {

  // console.log(ticket);
  const { price, segments } = ticket
  const stopsCount = {
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки'
  }
  function addZero(num) {
    return num < 10 ? `0${num}` : `${num}`
  }
  
  function getFlightRange(duration, date) {
    const ms = duration * 60 * 1000
    const endDate = Date.parse(date) + ms
    const start = `${addZero(new Date(date).getHours())}:${addZero(new Date(date).getMinutes())}`
    const end = `${addZero(new Date(endDate).getHours())}:${addZero(new Date(endDate).getMinutes())}`
    return `${start} – ${end}`
  }
  
  function getFlightDuration(time) {
    const ms = time * 60 * 1000
    const min = new Date(ms).getUTCMinutes()
    const h = new Date(ms).getUTCHours()
    const days = new Date(ms).getUTCDate() - 1
    let duration = ''
    if (days) duration += `${days}д `
    if (h) duration += `${h}ч `
    if (min) duration += `${min}м`
    return duration
  }

  const showTicketsInfo = (ticketsData) => {
    return ticketsData.map(({ origin, destination, date, stops, duration }) => {
      return (
      <React.Fragment key={`${index}-${origin}`}>
      <thead className={classes["table__head"]}>
      <tr>
        <th>{origin} – {destination}</th>
        <th>В пути</th>
        <th>{stopsCount[stops.length]}</th>
      </tr>
    </thead>
    <tbody className={classes["table__body"]}>
      <tr>
        <td>{getFlightRange(duration, date)}</td>
        <td>{getFlightDuration(duration)}</td>
        <td>{stops.join(', ')}</td>
      </tr>
    </tbody>
      </React.Fragment>
      )
    })
  }
  
  return (
    <li className={classes["ticket-card"]}>
      <div className={classes["ticket-card__head"]}>
        <span className={classes["ticket-price"]}>{price} Р </span>
        <img className={classes["ticket-card__logo"]} alt="logo" />
      </div>
      <table className={classes["ticket-card__table"]}>
        {showTicketsInfo(segments)}
      </table>
    </li>
  );
}
