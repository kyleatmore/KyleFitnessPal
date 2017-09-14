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
import steps from '../tour/steps';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
      runTour: false,
      autoStart: false,
    };
    this.joyrideCallback = this.joyrideCallback.bind(this);
    this.resumeJoyride = this.resumeJoyride.bind(this);
    this.startJoyride = this.startJoyride.bind(this);
  }

  joyrideCallback(data) {
    const { history } = this.props;

    if (data.action === "close") {
      this.joyride.reset(true);
      this.setState({ runTour: false, autoStart: false, steps: [] });
    } else if (data.type === "step:after" && data.action) {
      const nextPage = data.step.nextPage;
      if (nextPage === null) return;
      this.setState({ runTour: false });

      switch(nextPage) {
        case 'diary':
          history.push(`/food-diary/${this.props.currentDiary}`);
          break;
        case 'log-food':
          history.push(`/food-diary/${this.props.currentDiary}/log-food`);
          break;
        case 'exercise_diary':
          history.push(`/exercise-diary/${this.props.currentExerciseDiary}`);
          break;
        case 'home':
          history.push(`/`);
          break;
        default:
          break;
      }
    }
  }

  startJoyride() {
    this.joyride.reset(true);
    const newSteps = steps;
    this.setState({ runTour: true, steps: newSteps, autoStart: true });
  }

  resumeJoyride() {
    this.setState({ runTour: true });
  }



  render() {
    return (
      <div>
        <Joyride
          ref={c => (this.joyride = c)}
          callback={this.joyrideCallback}
          run={this.state.runTour}
          autoStart={this.state.autoStart}
          steps={this.state.steps}
          showBackButton={false}
          type='continuous'
          locale={{
              back: (<span>Back</span>),
              close: (<span>Close</span>),
              last: (<span>Next</span>),
              next: (<span>Next</span>),
              skip: (<span>Skip</span>),
            }}
          />
        <HeaderContainer />
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
            otherProps={{resumeJoyride: this.resumeJoyride}}
          />
          <ProtectedRoute
            path="/"
            component={HomePageContainer}
            otherProps={
              {resumeJoyride: this.resumeJoyride, startJoyride: this.startJoyride}
            }
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
