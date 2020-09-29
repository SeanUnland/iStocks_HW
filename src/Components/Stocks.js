import React, { useCallback } from "react";

import Prices from "./Prices";

const Stocks = (props) => {
  return (
    <>
      <li>{props.name}</li>
      {/* <p>{props.price}</p> */}
      <Prices name={props.name} price={props.price} />
    </>
  );
};

export default Stocks;
