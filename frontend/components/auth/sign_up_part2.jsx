import React from 'react';

const SEDENTARY = "Sedentary: Spend most of the day sitting (e.g. bank teller, desk job)";
const LIGHTLY_ACTIVE = "Lightly Active: Spend a good part of the day on your feet (e.g. teacher, salesperson)";
const ACTIVE = "Active: Spend a good part of the day doing some physical activity (e.g. food server, postal carrier)";
const VERY_ACTIVE = "Very Active: Spend most of the day doing heavy physical activity (e.g. bike messenger, carpenter)";

const GOAL_1 = "Lose 2 pounds per week";
const GOAL_2 = "Lose 1.5 pounds per week";
const GOAL_3 = "Lose 1 pound per week";
const GOAL_4 = "Lose 0.5 pounds per week";
const GOAL_5 = "Maintain my current weight";
const GOAL_6 = "Gain 0.5 pounds per week";
const GOAL_7 = "Gain 1 pound per week";

const SignUpPart2 = (
  {
    handleInput,
    handleSubmit,
    height,
    current_weight,
    goal_weight,
    gender,
    birth_date,
    username,
    activity_level,
    goal_description
  }) => {
  return (
    <div className="signup-container part2">
      <h2>Tell Us About Yourself</h2>
      <form className="signup-form">
        <ul className="input-fields">

          <li className="field">
            <label>Height:</label>
            <input
            type="text"
            onChange={handleInput('height')}
            value={height}
            />
          </li>

          <li className="field">
            <label>Current Weight:</label>
            <input
            type="text"
            onChange={handleInput('current_weight')}
            value={current_weight}
            />
          </li>

          <li className="field">
            <label>Goal Weight:</label>
            <input
            type="text"
            onChange={handleInput('goal_weight')}
            value={goal_weight}
            />
          </li>

          <li className="field">
            <label>Gender:</label>

            <input
            type="radio"
            id="male"
            name="gender"
            value="M"
            className="radio"
            onChange={handleInput('gender')}
            />
            <label className="radio" htmlFor="male">Male</label>

            <input
            type="radio"
            id="female"
            name="gender"
            value="F"
            className="radio"
            onChange={handleInput('gender')}
            />
            <label className="radio" htmlFor="female">Female</label>
          </li>

          <li className="field">
            <label>Date of Birth:</label>
            <input
            type="date"
            onChange={handleInput('birth_date')}
            />
          </li>

          <li className="field">
            <label>Username:</label>
            <input
            type="text"
            onChange={handleInput('username')}
            value={username}
            />
            <span>4-30 characters, no space</span>
          </li>

          <li className="activity-field">
            <ul className="activity-choices">
              <li>
                <label className="activity">How would you describe your normal daily activities?</label>
              </li>

              <li>
                <input className="radio" type="radio" id="1" name="activity" value="1" onChange={handleInput('activity_level')}/>
                <label className="activity" htmlFor="1">{SEDENTARY}</label>
              </li>

              <li>
              <input className="radio" type="radio" id="2" name="activity" value="2" onChange={handleInput('activity_level')}/>
              <label className="activity" htmlFor="2">{LIGHTLY_ACTIVE}</label>
              </li>

              <li>
                <input className="radio" type="radio" id="3" name="activity" value="3" onChange={handleInput('activity_level')}/>
                <label className="activity" htmlFor="3">{ACTIVE}</label>
              </li>

              <li>
                <input className="radio" type="radio" id="4" name="activity" value="4" onChange={handleInput('activity_level')}/>
                <label className="activity" htmlFor="4">{VERY_ACTIVE}</label>
              </li>
            </ul>

          </li>

          <li className="goal-field">
            <label className="goal">What is your goal?</label>
            <select name="goal_description" defaultValue="-1.0" onChange={handleInput('goal_description')}>
            <option value="-2.0">{GOAL_1}</option>
            <option value="-1.5">{GOAL_2}</option>
            <option value="-1.0">{GOAL_3}</option>
            <option value="0.5">{GOAL_4}</option>
            <option value="0">{GOAL_5}</option>
            <option value="0.5">{GOAL_6}</option>
            <option value="1">{GOAL_7}</option>
            </select>
          </li>

        </ul>

        <input
          type="submit"
          className="signup button"
          value="Save And Continue »"
          onClick={handleSubmit}
        />
      </form>

    </div>
  )
}

export default SignUpPart2;
