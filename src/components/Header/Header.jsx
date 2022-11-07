import React from "react";
import classes from "./Header.module.scss";
import logo from "./logo.svg";

export default function Header () {
  
      return (
        <header className={classes["App-header"]}>
          <img src={logo} className={classes["App-logo"]} alt="logo" />
        </header>
      );
  }
  