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
    fetch("https://cex.io/api/ticker/BTC/USDT")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtBtc: data });
      })
      .catch(console.log);
    fetch("https://cex.io/api/ticker/ETH/USDT")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtEth: data });
      })
      .catch(console.log);
    fetch("https://cex.io/api/ticker/XRP/USDT")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtXrp: data });
      })
      .catch(console.log);
    fetch("https://cex.io/api/ticker/LTC/USDT")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtLtc: data });
      })
      .catch(console.log);
    fetch("https://api.wazirx.com/api/v2/tickers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usdtInr: data.usdtinr });
      })
      .catch(console.log);
  }
}

export default App;
