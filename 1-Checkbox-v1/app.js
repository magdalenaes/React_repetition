const ValidationMessage = (props) => {
return (
<p>{props.txt}</p>
  )
}

const OrderForm = (props) => {
  const {submit, change, checked} = props
  return (
    <form onSubmit={submit}>
      <input 
      type="checkbox" 
      id="age" 
      onChange={change} 
      checked={checked}/>
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
      </form>
  )
}

class TicketShop extends React.Component {
  
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if(!this.state.isFormSubmitted) {
    this.setState({
      isFormSubmitted: true
    })
  }
}

  displayMessage = () => {
    if(this.state.isFormSubmitted) {
    if(this.state.isConfirmed) {
      return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!"/>
    } else {
      return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16lat"/>
    }
  } else {
    return null
  }
}

  render() {

    const {isConfirmed} = this.state

    return(
      <>
      <h1>Kup bilet na horror!</h1>
      <OrderForm 
      submit={this.handleFormSubmit}
      change={this.handleCheckboxChange}
      checked={isConfirmed}
      />
      {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"))