import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CarsList from './CarsList';

class Cars extends Component {
    render() {
        console.log(this.props.cars);
        return (
            <div>
                <h1>Cars</h1>
                <CarsList cars={this.props.cars} />
                <Link to="/">Back to Home</Link><br />
            </div>
        );
    }
}

export default Cars;