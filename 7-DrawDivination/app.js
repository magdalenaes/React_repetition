//WYTYCZNE
// Jeden komponent
// Wersja 1 - zobacz wróżbę, losuje jedną z trzech wróżb
// Wersja 2 - dodaje do trzech istniejących wróżb kolejną

class Draw extends React.Component {
  state = {
    divinations: ["pierwsza wróżba", "druga wróżba", "trzecia wróżba"],
    divination: "",
    value: "",
  }

  handleShowDivination = () => {
    const index = Math.floor(Math.random() * this.state.divinations.length)
    this.setState({
      divination: this.state.divinations[index]
    })
  }

  handleAddDivination = () => {
    if(this.state.value === "") return alert("wpisz coś!")
    const divinations = [...this.state.divinations]
    divinations.push(this.state.value)
    this.setState({
      divinations,
      value: "",
    })
    alert(`wróżba dodana. Aktualne wróżby: ${divinations}`)

  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <React.Fragment>
      <button onClick={this.handleShowDivination}>Zobacz wróżbę</button>
      <br/>
      <input 
      type="text" 
      value={this.state.value}
      onChange={this.handleInputChange}>   
      </input>
      <button onClick={this.handleAddDivination}>Dodaj wróżbę</button>
      {this.state.divination ? <h1>{this.state.divination}</h1> : null}
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Draw />, document.getElementById("root"))