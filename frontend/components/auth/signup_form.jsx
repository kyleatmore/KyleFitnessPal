import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import SignUpPart1 from './sign_up_part1';
import SignUpPart2 from './sign_up_part2';

const TODAY = new Date();
const inititalYear = TODAY.getFullYear() - 35;
const initialMonth = TODAY.getMonth();
const initialDay = TODAY.getDay();

const initialState = {
  user: {
    email: "",
    password: "",
    username: "",
    height: "",
    gender: "",
    birth_date: new Date(inititalYear, initialMonth, initialDay),
    current_weight: "",
    goal_weight: "",
    activity_level: "",
    goal_description: ""
  },
  step: 1,
  month: initialMonth,
  day: initialDay,
  year: inititalYear,
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
    this.handleWeightInput = this.handleWeightInput.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => {
      const nextState = merge({}, this.state, { user: {[field]: e.target.value} });
      this.setState(nextState);
    };
  }

  handleWeightInput(field) {
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
        {},
        this.state,
        { user: {height: nextHeight}, [field]: e.target.value }
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
        {}, this.state, { user: {birth_date: nextDate}, [field]: e.target.value }
      );
      this.setState(nextState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state.user);
    
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

  render() {
    const { errors, headerText, footerText, linkText, linkPath, buttonText, demoLogin } = this.props;
    const { step, month, day, year, feet, inches } = this.state;
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
    } = this.state.user;

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
            handleWeightInput={this.handleWeightInput}
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
