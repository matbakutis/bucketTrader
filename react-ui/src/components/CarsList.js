import React from'react'
import Car from './Car'

const CarsList = (props) => {

    const carsList = props.cars.map((car, i)=>{
        return (<Car key={i} price={car.price} make={car.make} model={car.model} description={car.description} owner={car.owner} miles={car.miles} />)
    });

    return (
        <div>
            {carsList}
        </div>
    );
};

export default CarsList