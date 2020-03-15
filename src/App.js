import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Ivan', age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('dfsgdfgdfg');
    // dont do this!!!-> this.state.persons[0].name = 'Igor';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Ivan', age: 30 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'igor', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Ivan', age: 30 }
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>hi,im a react appppp </h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Igoooor')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Igoooor!!!')}
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    //   return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'qqqqqqqqqqq'));

  }
}

export default App;
