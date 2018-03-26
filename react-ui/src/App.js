import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Cars from './components/Cars';
import Bikes from './components/Bikes';
import axios from 'axios'

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loggedIn: false,
			currentUser: {
				username: 'bob_loblaw',
				name: 'bobby loblaw',
			},
			bikes: [],
			cars: []
		}
	}

	mockLogIn = (logInInfo) => {
		this.getCars();
		this.getBikes();
		const newUser = { ...this.state.currentUser }
		newUser.username = logInInfo.username
		this.setState({ currentUser: newUser, loggedIn: true })
	}

	getCars = async () => {
		try {
            const response = await axios.get(`/cars`)

            const state = this.state;
			state.cars = response.data;
			this.setState(state);
			console.log(this.state.cars)

        } catch (error) {
            console.log('Error getting cars!')
            console.log(error)
        }
	}

	getBikes = async () => {
		try {
            const response = await axios.get(`/bikes`)

            const state = this.state;
			state.bikes = response.data;
			this.setState(state);
			console.log(this.state.bikes)

        } catch (error) {
            console.log('Error getting bikes!')
            console.log(error)
        }
	}

	addNewBike = async (newVehicle) => {
		try {
            const newVehicleResponse = await axios.post(`/bikes`, newVehicle)

            const bikes = [...this.state.bikes];
			bikes.push(newVehicle);
			this.setState({ bikes });

        } catch (error) {
            console.log('Error creating new bike!')
            console.log(error)
        }
    }

    // deleteBike = async (e) => {
	// 	try {
    //         await axios.delete(`/bikes/${bikeId}`)

    //         const bikes = [...this.state.bikes];
	// 		bikes.splice(e.currentTarget.id, 1);
	// 		this.setState({ bikes });

    //     } catch (error) {
    //         console.log(`Error deleting Idea with ID of ${bikeId}`)
    //         console.log(error)
    //     }
	// }
	
	addNewCar = async (newVehicle) => {
        try {
            const newVehicleResponse = await axios.post(`/cars`, newVehicle)

            const cars = [...this.state.cars];
			cars.push(newVehicle);
			this.setState({ cars });

        } catch (error) {
            console.log('Error creating new car!')
            console.log(error)
        }
    }

    // deleteCar = async (e) => {
    //     try {
    //         await axios.delete(`/bikes/${carId}`)

    //         const cars = [...this.state.cars];
	// 		cars.splice(e.currentTarget.id, 1);
	// 		this.setState({ cars });

    //     } catch (error) {
    //         console.log(`Error deleting Idea with ID of ${carId}`)
    //         console.log(error)
    //     }
    // }

	render() {

		const HomeComponent = () => (<Home loggedIn={this.state.loggedIn} />);
		const UserProfileComponent = () => (<UserProfile loggedIn={this.state.loggedIn} username={this.state.currentUser.username} name={this.state.currentUser.name} addNewBike={this.addNewBike} addNewCar={this.addNewCar} />);
		const LogInComponent = () => (<LogIn loggedIn={this.state.loggedIn} user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)
		const BikesComponent = () => (<Bikes loggedIn={this.state.loggedIn} bikes={this.state.bikes} />);
		const CarsComponent = () => (<Cars loggedIn={this.state.loggedIn} cars={this.state.cars} />);
		
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={HomeComponent} />
					<Route exact path="/userProfile" render={UserProfileComponent} />
					<Route exact path="/login" render={LogInComponent} />
					<Route exact path="/bikes" render={BikesComponent} />
					<Route exact path="/cars" render={CarsComponent} />
				</Switch>
			</Router>
		);
	}

}

export default App;
