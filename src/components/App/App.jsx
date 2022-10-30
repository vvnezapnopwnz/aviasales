import React from "react";
import classes from "./App.module.scss";
import logo from "./logo.svg";
import MovieService from "../../service";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: null,
    };
    this.movieService = new MovieService();
    this.movieService
      .getSearchId()
      .then((resources) => this.movieService.getTickets(resources))
      .then((resources) => {
        console.log(resources);
        this.setState({ tickets: resources.tickets });
      });
  }

  render() {
    return (
      <div className={classes.App}>
        <header className={classes["App-header"]}>
          <img src={logo} className={classes["App-logo"]} alt="logo" />
        </header>
        <main className={classes["main"]}>
          <aside className={classes["aside-filter"]}>
            <h3 className={classes["aside-filter__title"]}>
              КОЛИЧЕСТВО ПЕРЕСАДОК
            </h3>
            <ul className={classes["options-list"]}>
              <li>
                <label className={classes["option__label"]}>
                  <input
                    className={classes["option__input"]}
                    type="checkbox"
                    id="checkbox-1"
                  />
                  Все
                </label>
              </li>
              <li>
                <label className={classes["option__label"]}>
                  <input
                    className={classes["option__input"]}
                    type="checkbox"
                    id="checkbox-1"
                  />
                  Без пересадок
                </label>
              </li>
              <li>
                <label className={classes["option__label"]}>
                  <input
                    className={classes["option__input"]}
                    type="checkbox"
                    id="checkbox-1"
                  />
                  1 пересадка
                </label>
              </li>
              <li>
                <label className={classes["option__label"]}>
                  <input
                    className={classes["option__input"]}
                    type="checkbox"
                    id="checkbox-1"
                  />
                  2 пересадки
                </label>
              </li>
              <li>
                <label className={classes["option__label"]}>
                  <input
                    className={classes["option__input"]}
                    type="checkbox"
                    id="checkbox-1"
                  />
                  3 пересадки
                </label>
              </li>
            </ul>
          </aside>
          <section className={classes['main-content']}>
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
            <ul className={classes['tickets__list']}>
              <li className={classes['ticket-card']}>
                <div className={classes['ticket-card__head']}>
                  <span className={classes['ticket-price']}>13 400 Р </span>
                  <img src={logo} className={classes['ticket-card__logo']} alt="logo" />
                </div>
                <table className={classes['ticket-card__table']}>
                  <thead className={classes['table__head']}>
                    <tr>
                      <th>MOW – HKT</th>
                      <th>В пути</th>
                      <th>2 пересадки</th>
                    </tr>
                  </thead>
                  <tbody className={classes['table__body']}>
                    <tr>
                      <td>10:45 – 08:00</td>
                      <td>21ч 15м</td>
                      <td>HKG, JNB</td>
                    </tr>
                  </tbody>
                  <thead className={classes['table__head']}>
                    <tr>
                      <th>MOW – HKT</th>
                      <th>В пути</th>
                      <th>2 пересадки</th>
                    </tr>
                  </thead>
                  <tbody className={classes['table__body']}>
                    <tr>
                      <td>10:45 – 08:00</td>
                      <td>21ч 15м</td>
                      <td>HKG, JNB</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
            <button className={classes['show-more__button']}>
              Показать еще 5 билетов!
            </button>
          </section>
        </main>
      </div>
    );
  }
}
