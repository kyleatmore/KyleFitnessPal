import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import HomePage from './home/home_page.jsx';

const App = () => (
  <div>
    <HeaderContainer />
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
