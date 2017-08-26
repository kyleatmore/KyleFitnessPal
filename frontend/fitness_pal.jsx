import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout, trySignup } from './actions/session_actions';
import { requestAllFoods } from './actions/food_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // For testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.trySignup = trySignup;
  window.logout = logout;
  window.requestAllFoods = requestAllFoods;
  // testing

  ReactDOM.render(<Root store={store}/>, root);
});
