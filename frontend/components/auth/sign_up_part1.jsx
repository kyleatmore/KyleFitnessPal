
import React from 'react';
import { Link } from 'react-router-dom';

class SignUpPart1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleInput,
      handleSubmit,
      handleDemo,
      email,
      password,
      errorItems,
      headerText,
      footerText,
      linkText,
      linkPath,
      buttonText
    } = this.props;

    return (
      <div className="signup-container">

        <h2>{headerText}</h2>
        <ul className="errors">{errorItems}</ul>

        <form className="signup-form">
          <ul className="input-fields">
            <li className="field">
              <label>Email Address:</label>
              <input
              type="text"
              onChange={handleInput('email')}
              value={email}
              />
            </li>

            <li className="field">
              <label>Password:</label>
              <input
              type="password"
              onChange={handleInput('password')}
              value={password}
              />
              <span>6-255 characters, no space</span>
            </li>
          </ul>

          <input
          className="button"
          type="submit"
          value={buttonText}
          onClick={handleSubmit}
          />

          <input
          className="demo button"
          type="submit"
          value="Demo Log In"
          onClick={handleDemo}
          />
        </form>

        <div className="login-redirect">
          <ul>
            <li>
            {footerText}
            <Link to={linkPath}>{linkText}</Link>
            </li>
          </ul>
        </div>
      </div>
    );

  }
}

export default SignUpPart1;
