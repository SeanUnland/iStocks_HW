import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Prices from "./Components/Prices";
import Stocks from "./Components/Stocks";
import stockData from "./Components/stockData";

import "./App.css";

function App() {
  const [stock, setStock] = useState(null);

  const stockInfo = stockData.map((ele, index) => {
    return <Stocks name={ele.name} price={ele.open} />;
  });

  const handleClick = (stock) => {
    setStock(stock);
  };
  return (
    <div className="App">
      <nav className="navBar">
        <Link to="/Home">iStocks</Link>
        <Link to="/Stocks">Stocks</Link>
        <Link to="/About">About</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/Stocks">
            <Stocks stockInfo={stockInfo} />
            <section>{stockInfo}</section>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Prices handleClick={handleClick} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
