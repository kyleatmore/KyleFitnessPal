import React from 'react';
import { Link } from 'react-router-dom';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.target.value });
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
    const { loggedIn, errors, step, formType } = this.props;

    if (step === 1) {
      return (
        <div>
          <h3>Your Account Information</h3>
          <form>
            <label>Email:
              <input
                type="text"
                onChange={this.handleInput('email')}
                value={this.state.email}
                />
            </label>

            <label>Password:
              <input
                type="password"
                onChange={this.handleInput('password')}
                value={this.state.password}
                />
            </label>

            <input
              type="submit"
              onClick={this.handleSubmit}
            />
          </form>

        </div>
      );
    }
  }

}

export default AuthForm;
