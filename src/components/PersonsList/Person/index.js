import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass2 from '../../../hoc/withClass2';

import classes from './style.css'

class Person extends PureComponent{

    componentDidMount(){
        if(this.props.focusedInput === 0){
            this.imputElement.focus();
        }
    }

    render(){
        return <Auxiliary>
            <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input
                type="text"
                onChange={this.props.change}
                value={this.props.name}
                ref={(input) => {this.imputElement = input}}
            />
        </Auxiliary>
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass2(Person, classes.Person);