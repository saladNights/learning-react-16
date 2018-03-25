import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {

  state = {
    persons: [
        {name: 'Ivan', age: 34},
        {name: 'Petr', age: 23},
        {name: 'Sidor', age: 37}
    ]
  };

  switchNameHandler = (newName) => {
      this.setState({
          persons: [
              {name: newName, age: 34},
              {name: 'Petr', age: 23},
              {name: 'Sidor', age: 37}
          ]
      });
  };

  changedNameHandler = (event) => {
      this.setState({
          persons: [
              {name: 'Ivan', age: 34},
              {name: event.target.value, age: 23},
              {name: 'Sidor', age: 37}
          ]
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Learning React 16</h1>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Mitr')}
          />
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              change={this.changedNameHandler}
          >
            My hobby is cycling
          </Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
          />
          <button onClick={this.switchNameHandler.bind(this, 'Roma')}>
            Switch Name
          </button>
      </div>
    );
  }
}

export default App;
