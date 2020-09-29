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

      <a href="/Stocks/Microsft">
        <p>{props.microsoft}</p>
      </a>

      <a href="/Stock/Alphabet">
        <p>{props.alphabet}</p>
      </a>

      <a href="/Stocks/Facebook">
        <p>{props.facebook}</p>
      </a>

      <a href="/Stocks/Oracle">
        <p>{props.oracle}</p>
      </a>

      <a href="/Stocks/Intel">
        <p>{props.intel}</p>
      </a>

      <p>{props.price}</p>

      <Prices name={props.name} price={props.price} />
    </>
  );
};

export default Stocks;
