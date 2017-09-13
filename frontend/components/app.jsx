import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
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
    this.state = { steps: [], runTour: true, autoStart: false };
    this.addSteps = this.addSteps.bind(this);
    this.joyrideCallback = this.joyrideCallback.bind(this);
    this.resumeJoyride = this.resumeJoyride.bind(this);
  }

  addSteps(steps) {
    this.setState((currentState) => {
      const newSteps = currentState.steps.concat(steps);
      return Object.assign({}, this.state, { steps: newSteps });
    });
  }

  joyrideCallback(stepParam) {
    if (stepParam.type === "step:after") {
      const nextPage = stepParam.step.nextPage;
      if (nextPage === null) return;
      this.setState({ runTour: false, autoStart: false });

      switch(nextPage) {
        case 'diary':
          this.props.history.push(`/food-diary/${this.props.currentDiary}`);
          break;
        case 'log-food':
          this.props.history.push(`/food-diary/${this.props.currentDiary}/log-food`);
          break;
        case 'exercise_diary':
          this.props.history.push(`/exercise-diary/${this.props.currentExerciseDiary}`);
          break;
        default:
          break;
      }
    }
  }

  resumeJoyride() {
    this.setState({ runTour: true, autoStart: true });
  }



  render() {
    return (
      <div>
        <Joyride
          ref={c => (this.joyride = c)}
          callback={this.joyrideCallback}
          debug={true}
          run={this.state.runTour}
          autoStart={this.state.autoStart}
          showSkipButton={true}
          steps={this.state.steps}
          type='continuous'
          locale={{
              back: (<span>Back</span>),
              close: (<span>Close</span>),
              last: (<span>Next</span>),
              next: (<span>Next</span>),
              skip: (<span>Skip</span>),
            }}
          />
        <HeaderContainer addSteps={this.addSteps}/>
        <ProtectedRoute
          path="/"
          component={NavBarContainer}
          otherProps={{addSteps: this.addSteps}}
        />
        <Switch>
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <ProtectedRoute
            path="/goalsummary"
            component={GoalSummaryContainer}
          />
          <ProtectedRoute
            path="/food-diary/:diaryId/log-food"
            component={SearchContainer}
            otherProps={{resumeJoyride: this.resumeJoyride}}
          />
          <ProtectedRoute
            path="/food-diary/:diaryId/add-food"
            component={NewFoodFormContainer}
          />
          <ProtectedRoute
            path="/food-diary/:diaryId"
            component={FoodDiaryContainer}
            otherProps={{resumeJoyride: this.resumeJoyride}}
          />
          <ProtectedRoute
            path="/exercise-diary/:diaryId/log-exercise"
            component={ExerciseSearchContainer}
          />
          <ProtectedRoute
            path="/exercise-diary/:diaryId"
            component={ExerciseDiaryContainer}
          />
          <ProtectedRoute
            path="/"
            component={HomePageContainer}
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentDiary: state.ui.currentDiary,
    currentExerciseDiary: state.ui.currentExerciseDiary,
  };
};

export default withRouter(connect(mapStateToProps, null)(App));
