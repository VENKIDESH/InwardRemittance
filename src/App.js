import React, {Component} from 'react';
import BCoins from './components/bCoins';
import WCoins from './components/wCoins';
import { Box } from '@material-ui/core';


class App extends Component {
    render() {
        return (
            <Box display="flex" flexflow="row">
            <BCoins bCoins={this.state.bCoins} />
            <WCoins wCoins={this.state.wCoins} />
            </Box>
        )
    }

    state = {
        bCoins: [],
        wCoins: []
    };

    componentDidMount() {
        fetch('https://api.binance.com/api/v1/ticker/allPrices')
            .then(res => res.json())
            .then((data) => {
                this.setState({ bCoins: data })
            })
            .catch(console.log)
        fetch('https://api.wazirx.com/api/v2/tickers')
            .then(res => res.json())
            .then((data) => {
                this.setState({ wCoins: data.btcinr })
            })
            .catch(console.log)
    }
}

export default App;
