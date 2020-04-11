import React, {Component} from 'react';
import BCoins from './components/bCoins';


class App extends Component {
    render() {
        return (
            <div>
            <BCoins bCoins={this.state.bCoins} />
            </div>
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
                this.setState({ wCoins: data })
            })
            .catch(console.log)
    }
}

export default App;
