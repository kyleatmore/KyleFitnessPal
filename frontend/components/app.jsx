import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import NavBarContainer from './nav/nav_bar_container';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import HomePageContainer from './home/home_page_container.jsx';
import GoalSummaryContainer from './goals/goal_summary_container';
import FoodDiaryContainer from './food_diaries/food_diary_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <HeaderContainer />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/goalsummary" component={GoalSummaryContainer} />
      <ProtectedRoute path="/food-diary/:diaryId/log-food" component={SearchContainer} />
      <ProtectedRoute path="/food-diary/:diaryId" component={FoodDiaryContainer} />
      <ProtectedRoute path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;
