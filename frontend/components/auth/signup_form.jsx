import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import SignUpPart1 from './sign_up_part1';
import SignUpPart2 from './sign_up_part2';

const TODAY = new Date();
const initialYear = TODAY.getFullYear() - 35;
const initialMonth = TODAY.getMonth();
const initialDay = TODAY.getDate();

const initialState = {
  email: "",
  password: "",
  username: "",
  height: "",
  gender: "",
  birth_date: new Date(initialYear, initialMonth, initialDay),
  current_weight: "",
  goal_weight: "",
  activity_level: "",
  goal_description: "Lose 1 pound per week",
  step: 1,
  month: initialMonth,
  day: initialDay,
  year: initialYear,
  feet: "",
  inches: ""
};

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.handleHeightInput = this.handleHeightInput.bind(this);
    this.constructUser = this.constructUser.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => {
      const nextState = merge({}, this.state, { [field]: e.target.value });
      this.setState(nextState);
    };
  }

  handleHeightInput(field) {
    return (e) => {
      let nextHeight;
      switch(field) {
        case 'feet':
          nextHeight = (12 * e.target.value) + +this.state.inches;
          break;
        default:
          nextHeight = (12 * this.state.feet) + +e.target.value;
      }

      if (nextHeight === 0) { nextHeight = ""; }
      const nextState = merge(
        {}, this.state, { height: nextHeight, [field]: e.target.value }
      );
      this.setState(nextState);
    };
  }

  handleDateInput(field) {
    return (e) => {
      let nextDate = new Date(this.state.year, this.state.month, this.state.day);

      switch(field) {
        case 'year':
          nextDate.setFullYear(e.target.value);
          break;
        case 'month':
          nextDate.setMonth(e.target.value);
          break;
        default:
          nextDate.setDate(e.target.value);
      }

      const nextState = merge(
        {}, this.state, { birth_date: nextDate, [field]: e.target.value }
      );
      this.setState(nextState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.constructUser();
    if (this.state.step === 1) {
      this.props.trySignup(user)
        .then(
          () => {
            const nextState = merge({}, this.state, { step: this.state.step + 1 });
            this.setState(nextState);
          }
        );
    } else {
        this.props.processForm(user)
          .then(
            () => this.props.history.push("/goalsummary")
          );
    }
  }

  handleDemo() {
    this.props.demoLogin();
  }

  constructUser() {
    const user_params = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      height: this.state.height,
      gender: this.state.gender,
      birth_date: this.state.birth_date,
    };

    user_params.goals_attributes = [{
      current_weight: this.state.current_weight,
      goal_weight: this.state.goal_weight,
      activity_level: this.state.activity_level,
      goal_description: this.state.goal_description,
    }];
    return user_params;
  }

  render() {
    const { errors, headerText, footerText, linkText, linkPath, buttonText, demoLogin } = this.props;
    const {
      email,
      password,
      height,
      current_weight,
      goal_weight,
      gender,
      username,
      activity_level,
      goal_description,
      step,
      month,
      day,
      year,
      feet,
      inches,
    } = this.state;

    const errorItems = errors.map((error, idx) => {
      return(<li key={idx}>{error}</li>);
    });

    if (step === 1) {
      return (
        <SignUpPart1
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          errorItems={errorItems}
          email={email}
          password={password}
          headerText={headerText}
          footerText={footerText}
          linkText={linkText}
          linkPath={linkPath}
          buttonText={buttonText}
          handleDemo={this.handleDemo}
        />
      );
    } else {
        return (
          <SignUpPart2
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            handleDateInput={this.handleDateInput}
            handleHeightInput={this.handleHeightInput}
            errorItems={errorItems}
            height={height}
            current_weight={current_weight}
            goal_weight={goal_weight}
            gender={gender}
            username={username}
            activity_level={activity_level}
            goal_description={goal_description}
            month={month}
            day={day}
            year={year}
            feet={feet}
            inches={inches}
          />
      );
    }
  }

}

export default SignupForm;
