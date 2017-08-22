import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

const initialState = {
  user: {
    email: "",
    password: "",
    username: "",
    height: "",
    gender: "",
    birth_date: "",
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
    if (this.props.formType === "login") {
      this.props.processForm(user)
      .then(
        () => this.props.history.push("/")
      );
    } else {
      const nextState = merge({}, this.state, { step: this.state.step + 1 });
      debugger
      this.setState(nextState);
    }
  }

  render() {
    const { loggedIn, errors, formType } = this.props;
    const { step } = this.state;

    if (step === 1) {
      return (
        <div>
          <h3>Your Account Information</h3>
          <form>
            <label>Email:
              <input
                type="text"
                onChange={this.handleInput('email')}
                value={this.state.user.email}
                />
            </label>

            <label>Password:
              <input
                type="password"
                onChange={this.handleInput('password')}
                value={this.state.user.password}
                />
            </label>

            <input
              type="submit"
              onClick={this.handleSubmit}
            />
          </form>

        </div>
      );
    } else {
      return null;
    }
  }

}

export default AuthForm;
