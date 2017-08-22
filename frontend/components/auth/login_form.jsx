import React from 'react';
import merge from 'lodash/merge';
import SignUpPart1 from './sign_up_part1';

const initialState = { email: "", password: "" };

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => {
      const nextState = merge({}, this.state, { [field]: e.target.value });
      this.setState(nextState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(
        () => this.props.history.push("/")
      );
  }

  render() {
    return (
      <SignUpPart1
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
        />
    );
  }

}

export default LoginForm;
