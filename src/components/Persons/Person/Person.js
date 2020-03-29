import React, { Component, Fragment } from 'react';
//import './Person.css';
//import Aux from '../../../hoc/Auxiliary';
//import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] render...');
        return (
            <Fragment>
                {/* // <div className="Person" style={style}> */}
                {/* <div className={classes.Person} > */}
                < p onClick={this.props.click} > i'm {this.props.name} person and i'm {this.props.age} years old</p >
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                {/* </div > */}
            </Fragment>
        )
    }
}



export default Person;

