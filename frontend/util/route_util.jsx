import { Route, withRouter, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn}) => {
  return(
    <Route
      path={path}
      render={(props) => (
        !loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
    )}/>
  );
};

const Protected = ({component: Component, path, otherProps, loggedIn}) => {
  return(
    <Route
      path={path}
      render={(props) => {
        const allProps = Object.assign({}, props, otherProps);
        return loggedIn ?
          <Component {...allProps} /> : <Redirect to="/login" />;
      }
    }/>
  );
};

const mapStateToProps = (state) => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
