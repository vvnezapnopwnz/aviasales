import React from "react";
import classes from "./App.module.scss";

import { Header } from '../Header'
// import { AsideFilter } from '../AsideFilter'
import { TabButtons } from '../TabButtons'
import { TicketsList } from '../TicketsList'
import { ShowMoreButton } from '../ShowMoreButton'
import { AsideFilter } from '../AsideFilter'
import Counter from './Counter'
export default function App () {

    return (
      <div className={classes.App}>
          <Header />
        <main className={classes["main"]}>
            {/* <AsideFilter /> */}
            <AsideFilter />
          <section className={classes['main-content']}>
            <TabButtons />
            <TicketsList />
            <ShowMoreButton />
          </section>
          <Counter />
        </main>
      </div>
    );
}
