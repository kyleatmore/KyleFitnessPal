import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { addNewFood } from './actions/food_actions';
import merge from 'lodash/merge';


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
  window.merge = merge;
  window.addNewFood = addNewFood;
  // testing

  ReactDOM.render(<Root store={store}/>, root);
});
