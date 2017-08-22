import React from 'react';

const SignUpPart1 = ({ handleInput, handleSubmit, email, password}) => {
  return (
    <div className="signup-container">

      <h2>Your Account Information</h2>
      <form className="signup-form">
        <label>Email:
          <input
            type="text"
            onChange={handleInput('email')}
            value={email}
            />
        </label>

        <label>Password:
          <input
            type="password"
            onChange={handleInput('password')}
            value={password}
            />
        </label>

        <input
          type="submit"
          onClick={handleSubmit}
        />
      </form>

    </div>
  );
};

export default SignUpPart1;
