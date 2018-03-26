import React from'react'

const Car = (props) => {
    return (
        <div>
            <h3>Price: {props.price}</h3>
            <h4>Make: {props.make}</h4>
            <h4>Model: {props.model}</h4>
            <h4>Miles: {props.miles}</h4>
            <h4>Description: {props.description}</h4>
            <h4>Owner: {props.owner}</h4>
            <hr />
        </div>
    );
};

export default Car