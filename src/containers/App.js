import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constractor');
  }
  state = {
    persons: [
      { id: 'sdfsdf', name: 'Max', age: 28 },
      { id: 'dfgfdg', name: 'Manu', age: 29 },
      { id: 'fghfgh', name: 'Ivan', age: 26 }
    ],
    showPersons: false,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App,js] getDerivedStateFromProps', props);
    return state;
  }
  // componentDidMount() {
  //   console.log('[App.js] componentDidMount');
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App,js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('[App,js] componentDidUpdate');
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
  loginHandler = () => {
    this.setState({ authenticated: true });
  }
  render() {
    console.log('[Ap.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        isAuthenticated={this.state.authenticated} />;
    }

    return (
      <Aux >
        <AuthContext.Provider
          value={{
            authernticated: this.state.authenticated,
            login: this.loginHandler
          }}>
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler} />
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
