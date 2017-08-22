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
};

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      const nextState = merge({}, this.state, { step: this.state.step + 1 });
      this.setState(nextState);
    } else {
        this.props.processForm(user)
          .then(
            () => this.props.history.push("/goalsummary")
          );
    }
  }

  render() {
    const { errors } = this.props;
    const { step } = this.state;

    if (step === 1) {
      return (
        <SignUpPart1
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          email={this.state.user.email}
          password={this.state.user.password}
        />
      );
    } else {
        return (
          <SignUpPart2
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            height={this.state.user.height}
            current_weight={this.state.user.current_weight}
            goal_weight={this.state.user.goal_weight}
            gender={this.state.user.gender}
            birth_date={this.state.user.birth_date}
            username={this.state.user.username}
            activity_level={this.state.user.activity_level}
            goal_description={this.state.user.goal_description}
          />
      );
    }
  }

}

export default AuthForm;
