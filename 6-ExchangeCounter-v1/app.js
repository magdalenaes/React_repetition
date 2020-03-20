const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2)
  return (
    <div>{props.title} {props.cash <= 0 ? "" : value}</div>
  )
}

class ExchangeCounter extends React.Component {

  state = {
    amount: "",
    product: "gas",
  }

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.6,
      title: "Wartość w dolarach:"
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.1,
      title: "Wartość w euro:"
    },
    {
      id: 3,
      name: "pound",
      ratio: 4.55,
      title: "Wartość w funtach:"
    },
  ]

  handleChange = e => {
    this.setState({
      amount: e.target.value
    })
  }

  handleSelect = e => {
    this.setState({
      product: e.target.value
    })
  }

  insertSuffix(select) {
    if(select === "electricity") return <em> kWh</em>
    else if(select === "gas") return <em> l</em>
    else if(select === "oranges") return <em> kg</em>
    else return null
  }

  render() {

    const { amount, product } = this.state;
    const calculators = this.currencies.map(currency => (
      <Cash 
      key={currency.id} 
      ratio={currency.ratio} 
      title={currency.title} 
      cash={amount}/>
    ))
    return (
      <div className="app">
        <label>Wybierz produkt:
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
      </div>
    )
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'))
