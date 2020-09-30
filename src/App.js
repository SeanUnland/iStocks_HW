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
    return (
      <Stocks
        apple={ele.apple}
        microsoft={ele.microsoft}
        alphabet={ele.alphabet}
        facebook={ele.facebook}
        oracle={ele.oracle}
        intel={ele.intel}
        price={ele.open}
        index={index}
      />
    );
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
            <Stocks stockInfo={stockInfo} handleClick={handleClick} />
            <section>{stockInfo}</section>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Prices handleClick={handleClick} />

          <Route path="/Stocks/Apple%20Inc" render={(price) => <Stocks />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
