import PropTypes from 'prop-types'
import React from 'react'

import classes from './SingleTicket.module.scss'

export default function SingleTicket({ index, ticket }) {
  const { price, carrier, segments } = ticket
  const stopsCount = {
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
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
          <thead className={classes.Table_Head}>
            <tr>
              <th>
                {origin} – {destination}
              </th>
              <th>В пути</th>
              <th>{stopsCount[stops.length]}</th>
            </tr>
          </thead>
          <tbody className={classes.Table_Body}>
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
    <li className={classes.Ticket_Card}>
      <div className={classes.Ticket_Card_Head}>
        <span className={classes.Ticket_Price}>{price} Р </span>
        <img
          className={classes.Ticket_Card_Logo}
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt={`${carrier} logo`}
        />
      </div>
      <table className={classes.Ticket_Card_Table}>{showTicketsInfo(segments)}</table>
    </li>
  )
}

SingleTicket.defaultProps = {
  index: 0,
  ticket: {
    carrier: '',
    price: 0,
  },
}

SingleTicket.propTypes = {
  index: PropTypes.number.isRequired,
  ticket: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.array
  })
}