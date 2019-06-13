import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Users from './Users';

class App extends React.Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

  render() {
    return (
      <>
        <h1>Welcome</h1>

        <ul>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><button onClick={this.logout}>Logout</button></li>
        </ul>
        
        <main>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/users" component={Users} />
        </main>
      </>
    );
  }
}

export default withRouter(App);