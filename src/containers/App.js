import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/PersonsList';
import Cockpit from '../components/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass2 from '../hoc/withClass2';

class App extends PureComponent {

  state = {
    persons: [
        {id: 'w3rw', name: 'Ivan', age: 34},
        {id: 'etg4e', name: 'Petr', age: 23},
        {id: 'vmbj', name: 'Egor', age: 37}
    ],
    showPersons: false,
    toggleClicked: 0
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
    this.setState((prevState, props) => {
        return {
            showPersons: !doesShow,
            toggleClicked: prevState.toggleClicked + 1
        };
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
      <Auxiliary>
          <button
            onClick={() => {this.setState({showPersons: true})}}
          >Show Persons</button>
          <Cockpit
            title={this.props.title}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
        {persons}
      </Auxiliary>
    );
  }
}

export default withClass2(App, classes.App);
