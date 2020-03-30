import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authernticated);
    }
    render() {
        console.log('[Person.js] render...');
        return (
            <Aux>

                {
                    this.context.authernticated ? <p>Authenticated!</p> : <p>Please Log in</p>
                }

                {/* {this.props.isAuth ? <p>Authenticated!</p> : <p>Please Log in</p>} */}
                {/* // <div className="Person" style={style}> */}
                {/* <div className={classes.Person} > */}
                < p onClick={this.props.click} > i'm {this.props.name} person and i'm {this.props.age} years old</p >
                <p>{this.props.children}</p>
                <input
                    //ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
                {/* </div > */}
            </Aux>
        );
    }
}
Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


export default withClass(Person, classes.Person);

