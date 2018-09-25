import React from 'react';
import classes from './style.css'

const Person = (props) => {

    return <div className={classes.Person}>
        <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>
};

export default Person;