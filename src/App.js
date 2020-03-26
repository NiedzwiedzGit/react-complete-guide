import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'sdfsdf', name: 'Max', age: 28 },
      { id: 'dfgfdg', name: 'Manu', age: 29 },
      { id: 'fghfgh', name: 'Ivan', age: 26 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        < div >
          {
            this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}

                  changed={(event) => this.nameChangeHandler(event, person.id)} />
              </ErrorBoundary>
            })
          }
        </div >
      );
      btnClass = classes.Red;

    }
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App} >
        <h1>hi,im a react appppp </h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass}
          // style={style}
          onClick={this.togglePersonsHandler}>Toggle persons
          </button>
        {persons}
      </div>
    );
    //   return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'qqqqqqqqqqq'));

  }
}

export default App;
