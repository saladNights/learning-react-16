import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/PersonsList';
import Cockpit from '../components/Cockpit';

class App extends Component {

  state = {
    persons: [
        {id: 'w3rw', name: 'Ivan', age: 34},
        {id: 'etg4e', name: 'Petr', age: 23},
        {id: 'vmbj', name: 'Egor', age: 37}
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
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      );
    }

    return (
      <div className={classes.App}>
          <Cockpit
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
        {persons}
      </div>
    );
  }
}

export default App;
