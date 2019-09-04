import React from 'react';
import './Person.css'

const person = (props) =>{
    return (
        <div className="Person">
            <p onClick={props.click}>PersonName:{props.name} </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.change}/>
        </div>
    )};

export default person;