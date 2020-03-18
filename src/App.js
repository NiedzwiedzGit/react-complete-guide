import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Ivan', age: 26 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
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
        { name: 'den', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Ivan', age: 30 }
      ]
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        < div >
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangeHandler} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'ivan!!!')}
            changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div >
      );
    }
    return (
      <div className="App" >
        <h1>hi,im a react appppp </h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
    //   return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'qqqqqqqqqqq'));

  }
}

export default App;
