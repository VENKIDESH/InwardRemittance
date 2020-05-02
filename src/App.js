import React, { Component } from "react";
import BCoins from "./components/bCoins";
import WCoins from "./components/wCoins";
import CCoins from "./components/cCoin";
import Tables from "./components/table";
import { Box } from "@material-ui/core";

class App extends Component {
  render() {

    return (
      <Box display="flex" flexflow="row">
        <Tables
          btcInr={this.state.btcInr}
          ethInr={this.state.ethInr}
          xrpInr={this.state.xrpInr}
          ltcInr={this.state.ltcInr}
          usdtBtc={this.state.usdtBtc}
          usdtEth={this.state.usdtEth}
          usdtXrp={this.state.usdtXrp}
          usdtLtc={this.state.usdtLtc}
          usdtInr={this.state.usdtInr}
        />
      </Box>
    );
  }

  state = {
    btcInr: [],
    ethInr: [],
    xrpInr: [],
    ltcInr: [],
    usdtBtc: [],
    usdtEth: [],
    usdtXrp: [],
    usdtLtc: [],
    usdtInr: [],
  };

  componentDidMount() {
    fetch("https://api.wazirx.com/api/v2/tickers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ btcInr: data.btcinr });
      })
      .catch(console.log);
    fetch("https://api.wazirx.com/api/v2/tickers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ethInr: data.ethinr });
      })
      .catch(console.log);
    fetch("https://api.wazirx.com/api/v2/tickers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ xrpInr: data.xrpinr });
      })
      .catch(console.log);
    fetch("https://api.wazirx.com/api/v2/tickers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ltcInr: data.ltcinr });
      })
      .catch(console.log);
    fetch("https://cex.io/api/ticker/BTC/USD")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtBtc: data });
      })
      .catch(console.log);
    fetch("https://cex.io/api/ticker/ETH/USD")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtEth: data });
      })
      .catch(console.log);
    fetch("https://cex.io/api/ticker/XRP/USD")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtXrp: data });
      })
      .catch(console.log);
    fetch("https://cex.io/api/ticker/LTC/USD")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtLtc: data });
      })
      .catch(console.log);
    fetch("https://www.freeforexapi.com/api/live?pairs=USDINR")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtInr: data.rates.USDINR });
      })
      .catch(console.log);
      setTimeout(this.componentDidMount.bind(this), 5000);
  }
}

export default App;
