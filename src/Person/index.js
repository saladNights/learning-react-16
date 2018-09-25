import React from 'react';
import './style.css'

const Person = (props) => {

    const style = {
      '@media (max-width: 500px)': {
        width: '90%'
      }
    };

    return <div className="Person" style={style}>
        <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>
};

export default Person;