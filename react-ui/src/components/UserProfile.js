import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NewForm from './NewForm'

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.username}</div>
          <div>Name: {this.props.name}</div>

          <NewForm username={this.props.username} addNewBike={this.props.addNewBike} addNewCar={this.props.addNewCar} />

          <Link to="/">Back to Home</Link>
        </div>
    );
  }
}

export default UserProfile;