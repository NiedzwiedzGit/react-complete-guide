import React from 'react';
//import './Person.css';
import classes from './Person.css'
const person = (props) => {

    return (
        // <div className="Person" style={style}>
        < div className={classes.Person}>
            < p onClick={props.click} > i'm {props.name} person and i'm {props.age} years old</p >
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div >

    )
}

export default person;

