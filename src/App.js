import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Learning React 16</h1>
          <Person name="Ivan" age="26"/>
          <Person name="Petr" age="42">My hobby is cycling</Person>
          <Person name="Sidor" age="21"/>
      </div>
    );
  }
}

export default App;
