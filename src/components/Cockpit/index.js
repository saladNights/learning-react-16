import React from 'react';
import classes from "./index.css";

import Auxiliary from '../../hoc/Auxiliary.js'

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = classes.Button;

    if(props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
        assignedClasses.push(classes.bold);
    }

    return (
        <Auxiliary>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>
                List of users
            </p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </Auxiliary>
    );
};

export default cockpit;