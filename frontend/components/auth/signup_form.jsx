import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import SignUpPart1 from './sign_up_part1';
import SignUpPart2 from './sign_up_part2';

const initialState = {
  user: {
    email: "",
    password: "",
    username: "",
    height: "",
    gender: "",
    birth_date: "",
    current_weight: "",
    goal_weight: "",
    activity_level: "",
    goal_description: ""
  },
  step: 1,
  initialErrors: [],
};

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkInitialErrors = this.checkInitialErrors.bind(this);
  }

  handleInput(field) {
    return (e) => {
      const nextState = merge({}, this.state, { user: {[field]: e.target.value} });
      this.setState(nextState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state.user);

    if (this.state.step === 1) {
      this.checkInitialErrors(user);
      const nextState = merge({}, this.state, { step: this.state.step + 1 });
      this.setState(nextState);
    } else {
        this.props.processForm(user)
          .then(
            () => this.props.history.push("/goalsummary")
          );
    }
  }

  checkInitialErrors(user) {
    const nextErrors = [];
    debugger
    if (!user.email) {
      nextErrors.push("Please enter a valid email address.");
    }

    if (user.password.length < 6) {
      nextErrors.push("Your password must be at least 6 characters long.");
    }
    debugger
    if (nextErrors.length > 0) {
      const nextState = merge({}, this.state, { initialErrors: nextErrors });
      this.setState(nextState);
    }
  }

  render() {
    const { errors } = this.props;
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
          email={email}
          password={password}
          errorItems={errorItems}
        />
      );
    } else {
        return (
          <SignUpPart2
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
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
