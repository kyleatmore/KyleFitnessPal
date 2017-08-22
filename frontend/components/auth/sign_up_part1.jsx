import React from 'react';

const SignUpPart1 = ({ handleInput, handleSubmit, email, password}) => {
  return (
    <div className="signup-container">

      <h2>Your Account Information</h2>
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
          </li>
        </ul>

        <input
          className="button"
          type="submit"
          value="Continue"
          onClick={handleSubmit}
        />
      </form>

    </div>
  );
};

export default SignUpPart1;
