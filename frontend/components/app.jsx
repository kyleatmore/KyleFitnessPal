import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import AuthFormContainer from './auth/auth_form_container';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
      <AuthRoute path="/login" component={AuthFormContainer} />
      <Route path="/signup" component={AuthFormContainer} />
    </header>

  </div>
);

export default App;
