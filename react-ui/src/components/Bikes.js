import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BikesList from './BikesList';

class Bikes extends Component {
    render() {
        return (
            <div>
                <h1>Bikes</h1>
                <BikesList bikes={this.props.bikes} />
                <Link to="/">Back to Home</Link><br />
            </div>
        );
    }
}

export default Bikes;