const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2)
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: "",
    ratioDollar: 3.6,
    ratioEuro: 4.2,
  }

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  render() {

    const { amount, ratioDollar, ratioEuro } = this.state;

    return (
      <div className="app">
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>
        <Cash cash={amount} ratio={ratioDollar} title="Wartość w dolarach: " />
        <Cash cash={amount} ratio={ratioEuro} title="Wartość w euro: " />
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))
