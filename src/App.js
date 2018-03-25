import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {

  state = {
    persons: [
        {id: 'w3rw', name: 'Ivan', age: 34},
        {id: 'etg4e', name: 'Petr', age: 23},
        {id: 'vmbj', name: 'Sidor', age: 37}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {

      const PersonIndex = this.state.persons.findIndex(person => {
          return person.id === id;
      });

      const person = {...this.state.persons[PersonIndex]};
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[PersonIndex] = person;

    this.setState({persons: persons});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
        showPersons: !doesShow
    });
  };

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
              {this.state.persons.map((person, index) => {
                return <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.deletePersonHandler(index)}
                    key={person.id}
                    change={(event) => this.nameChangedHandler(event, person.id)}
                />
              })}
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Learning React 16</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
