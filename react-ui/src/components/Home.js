import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <h1>Bucket Trader</h1>
          { this.props.loggedIn ?  <Link to="/userProfile">User Profile<br/></Link> : null }
          { !this.props.loggedIn ? <Link to="/login">Log In</Link> : null }
          { this.props.loggedIn ? <Link to="/cars">Cars<br/></Link> : null }
          { this.props.loggedIn ? <Link to="/bikes">Bikes<br/></Link> : null }
        </div>
    );
  }
}

export default Home;