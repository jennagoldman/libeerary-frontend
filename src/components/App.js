import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Favorites from './Favorites';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRoute';

export default class App extends Component {
  state = { user: null };

  setUser = user => {
    this.setState({ user: user.body });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router basename="favorites-frontend">
          <Switch>
            <PrivateRoute exact path="/" component={Search} user={this.state.user} />
            <PrivateRoute exact path="/favorites" component={Favorites} user={this.state.user} />
            <Route exact path="/signin" render={(props) => 
              <SignUp {...props} setUser={ this.setUser} user={ this.state.user } />
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}