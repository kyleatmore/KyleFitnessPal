import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPart1 = ({ handleInput, handleSubmit, email, password, errorItems, headerText, footerText, linkText, linkPath }) => {
  return (
    <div className="signup-container">

      <h2>{headerText}</h2>
      <ul>{errorItems}</ul>

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
          value="Continue »"
          onClick={handleSubmit}
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
};

export default SignUpPart1;
