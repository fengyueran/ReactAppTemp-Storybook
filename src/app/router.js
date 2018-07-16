import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/home';
import Login from '../views/login';


const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  </ConnectedRouter>
);
Router.propTypes = {
  history: PropTypes.object.isRequired
};

export default Router;
