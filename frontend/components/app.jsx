import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
    </header>

  </div>
);

export default App;
