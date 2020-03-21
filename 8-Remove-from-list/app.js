// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)

const Person = (props) => {
return (
  <li>
    <span>{props.name}</span>
    <button onClick={props.delete}>Usuń</button>
  </li>
)
}

class List extends React.Component {

  state = {
    people: [
      {id: 1, name: "Magda Ś."},
      {id:2, name: "Paweł K."},
      {id:3, name: "Marcelina G."},
      {id:4, name: "Marysia Z."},
    ]
  }

  handleDelete(id) {
    const people = [...this.state.people]
    const index = people.findIndex(person => person.id === id)
    people.splice(index, 1)
    this.setState({
      people
    })
  }

  render() {

    const people = this.state.people.map(person => 
      <Person 
      key={person.id} 
      name={person.name} 
      delete={this.handleDelete.bind(this, person.id)} />)

    return (
    <ul>{people}</ul>
    )
  }
}

ReactDOM.render(<List />, document.getElementById("root"))