import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import SignUpPart1 from './sign_up_part1';
import SignUpPart2 from './sign_up_part2';

const TODAY = new Date();

const initialState = {
  user: {
    email: "",
    password: "",
    username: "",
    height: "",
    gender: "",
    birth_date: new Date(TODAY.getFullYear() - 35, TODAY.getMonth(), TODAY.getDate()),
    current_weight: "",
    goal_weight: "",
    activity_level: "",
    goal_description: ""
  },
  step: 1,
  month: TODAY.getMonth(),
  day: TODAY.getDate(),
  year: TODAY.getFullYear() - 35,
};

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleDate = this.handleDate.bind(this);
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

  handleDate(field) {
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

      const nextState = merge({}, this.state, { user: {birth_date: nextDate}, [field]: e.target.value });
      debugger
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
    const { step } = this.state;
    const {
      email,
      password,
      height,
      current_weight,
      goal_weight,
      gender,
      birth_date,
      username,
      activity_level,
      goal_description
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
            handleDate={this.handleDate}
            errorItems={errorItems}
            height={height}
            current_weight={current_weight}
            goal_weight={goal_weight}
            gender={gender}
            birth_date={birth_date}
            username={username}
            activity_level={activity_level}
            goal_description={goal_description}
          />
      );
    }
  }

}

export default SignupForm;
