import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person';

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
    let btnClass = '';

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
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Learning React 16</h1>
        <p className={assignedClasses.join(' ')}>
          Lorem ipsum
        </p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
