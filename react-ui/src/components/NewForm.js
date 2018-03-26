import React, { Component } from 'react';

class NewForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newVehicle: {
                owner: this.props.username
            }
        }
    }

    handleNewVehicleChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newVehicle = { ...this.state.newVehicle };
        newVehicle[attributeName] = attributeValue;

        this.setState({ newVehicle })
    }

    addNewVehicle = (event) => {
        event.preventDefault();
        if (this.state.newVehicle.bikeOrCar === "car") {
            this.props.addNewCar(this.state.newVehicle);
        }else if (this.state.newVehicle.bikeOrCar === "bike"){
            this.props.addNewBike(this.state.newVehicle); 
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewVehicle}>
                    <div>
                        <select name="bikeOrCar" onChange={this.handleNewVehicleChange}>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                        </select>
                    </div>
                    <div><input name="make" type="text" placeholder="Make" onChange={this.handleNewVehicleChange} /></div>
                    <div><input name="model" type="text" placeholder="Model" onChange={this.handleNewVehicleChange} /></div>
                    <div><input name="miles" type="number" placeholder="Miles" onChange={this.handleNewVehicleChange} /></div>
                    <div><textarea name="description" placeholder="Description" onChange={this.handleNewVehicleChange} /></div>
                    <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewVehicleChange} /></div>
                    <div><input type="submit" value="Create New Vehicle" /></div>
                </form>
            </div>
        );
    }
}

export default NewForm;