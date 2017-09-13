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
import NewFoodFormContainer from './new_foods/new_food_form_container';
import ExerciseDiaryContainer from './exercise_diaries/exercise_diary_container';
import ExerciseSearchContainer from './exercises_search/exercises_search_container';
import Joyride from 'react-joyride';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { steps: [] };
    this.addSteps = this.addSteps.bind(this);
  }

  addSteps(steps) {
    this.setState((currentState) => {
      currentState.steps = currentState.steps.concat(steps);
      return currentState;
    });
  }

  render() {
    debugger
    return (
      <div>
        <Joyride
          ref={c => (this.joyride = c)}
          callback={this.callback}
          debug={true}
          run={true}
          showSkipButton={true}
          showStepsProgress={true}
          steps={this.state.steps}
          />
        <HeaderContainer addSteps={this.addSteps}/>
        <ProtectedRoute path="/" component={NavBarContainer} />
        <Switch>
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <ProtectedRoute path="/goalsummary" component={GoalSummaryContainer} />
          <ProtectedRoute path="/food-diary/:diaryId/log-food" component={SearchContainer} />
          <ProtectedRoute path="/food-diary/:diaryId/add-food" component={NewFoodFormContainer} />
          <ProtectedRoute path="/food-diary/:diaryId" component={FoodDiaryContainer} />
          <ProtectedRoute path="/exercise-diary/:diaryId/log-exercise" component={ExerciseSearchContainer} />
          <ProtectedRoute path="/exercise-diary/:diaryId" component={ExerciseDiaryContainer} />
          <ProtectedRoute path="/" component={HomePageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
