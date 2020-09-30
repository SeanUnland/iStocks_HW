import React, { useCallback } from "react";

import Prices from "./Prices";

import { Route, Link, Switch } from "react-router-dom";

const Stocks = (props) => {
  return (
    <>
      {/* <Route path="/Apple%20Inc"> */}
      <a href="/Stocks/Apple Inc">
        <p>{props.apple}</p>
      </a>
      {/* </Route> */}

      <a href="/Stocks/Microsft Corporation">
        <p>{props.microsoft}</p>
      </a>

      <a href="/Stock/Alphabet Inc">
        <p>{props.alphabet}</p>
      </a>

      <a href="/Stocks/Facebook Inc">
        <p>{props.facebook}</p>
      </a>

      <a href="/Stocks/Oracle Corporation">
        <p>{props.oracle}</p>
      </a>

      <a href="/Stocks/Intel Corporation">
        <p>{props.intel}</p>
      </a>

      <p>{props.price}</p>

      <Prices name={props.name} price={props.price} />
    </>
  );
};

// I got the companies to appear in Stocks and when they are clicke the URL changes. I can't figure out how to click one, open it and display its respected name and price. I added the price to the Stocks component as a palceholder

export default Stocks;
