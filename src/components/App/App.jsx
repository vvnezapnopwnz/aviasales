import React from "react";
import classes from "./App.module.scss";

import aviasalesService from "../../services/aviasalesService";

import { Header } from '../Header'
// import { AsideFilter } from '../AsideFilter'
import { TabButtons } from '../TabButtons'
import { TicketsList } from '../TicketsList'
import { ShowMoreButton } from '../ShowMoreButton'
import VisibleFilter from "../../containers/VisibleFilter";

export default function App () {

    const aviasales = new aviasalesService();
    aviasales
      .getSearchId()
      .then((resources) => aviasales.getTickets(resources))
      .then((resources) => {
        console.log(resources);
      });

    return (
      <div className={classes.App}>
          <Header />
        <main className={classes["main"]}>
            {/* <AsideFilter /> */}
            <VisibleFilter />
          <section className={classes['main-content']}>
            <TabButtons />
            <TicketsList />
            <ShowMoreButton />
          </section>
        </main>
      </div>
    );
}
