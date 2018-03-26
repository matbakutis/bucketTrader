import React from'react'
import Bike from './Bike'

const BikesList = (props) => {

    const bikesList = props.bikes.map((bike, i)=>{
        return (<Bike key={i} bikeId={i} price={bike.price} make={bike.make} model={bike.model} description={bike.description} owner={bike.owner} miles={bike.miles} />)
    });

    return (
        <div>
            {bikesList}
        </div>
    );
};

export default BikesList