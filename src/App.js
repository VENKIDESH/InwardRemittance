import React, { Component } from "react";
import BCoins from "./components/bCoins";
import WCoins from "./components/wCoins";
import CCoins from "./components/cCoin";
import { Box } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Box display="flex" flexflow="row">
        <BCoins bCoins={this.state.bCoins} />
        <WCoins wCoins={this.state.wCoins} />
        <CCoins cCoins={this.state.cCoins} />
      </Box>
    );
  }

  state = {
    bCoins: [],
    cCoins: [],
    wCoins: [],
  };

  componentDidMount() {
    fetch("https://api.binance.com/api/v1/ticker/allPrices")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ bCoins: data });
      })
      .catch(console.log);
    fetch("https://cex.io/api/currency_limits")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cCoins: data.data.pairs });
      })
      .catch(console.log);
    fetch("https://api.bittrex.com/api/v1.1/public/getmarketsummaries")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ wCoins: data.result });
      })
      .catch(console.log);
  }
}

export default App;
