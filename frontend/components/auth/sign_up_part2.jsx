import React from 'react';
import { range } from 'lodash';

const SEDENTARY = "Spend most of the day sitting (e.g. bank teller, desk job)";
const LIGHTLY_ACTIVE = "Spend a good part of the day on your feet (e.g. teacher, salesperson)";
const ACTIVE = "Spend a good part of the day doing some physical activity (e.g. food server, postal carrier)";
const VERY_ACTIVE = "Spend most of the day doing heavy physical activity (e.g. bike messenger, carpenter)";

const GOAL_1 = "Lose 2 pounds per week";
const GOAL_2 = "Lose 1.5 pounds per week";
const GOAL_3 = "Lose 1 pound per week";
const GOAL_4 = "Lose 0.5 pounds per week";
const GOAL_5 = "Maintain my current weight";
const GOAL_6 = "Gain 0.5 pounds per week";
const GOAL_7 = "Gain 1 pound per week";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

const monthOptions = MONTHS.map((month, idx) => {
  return (
    <option key={idx+1} value={idx}>{month}</option>
  );
})

const DAYS = range(1, 32);
const dayOptions = DAYS.map((day) => {
  return (
    <option key={day} value={day}>{day}</option>
  );
})

const YEARS = range(1917, 2018);
const yearOptions = YEARS.map((year) => {
  return (
    <option key={year} value={year}>{year}</option>
  );
})

const SignUpPart2 = (
  {
    errorItems,
    handleInput,
    handleSubmit,
    handleDateInput,
    handleWeightInput,
    height,
    current_weight,
    goal_weight,
    gender,
    username,
    activity_level,
    goal_description,
    month,
    day,
    year,
    feet,
    inches
  }) => {
  return (
    <div className="signup-container part2">
      <h2>Tell Us About Yourself</h2>
      <p>We will use this information to create a personalized diet and
      exercise profile for you.</p>
      <ul className="errors">{errorItems}</ul>

      <form className="signup-form">
        <ul className="input-fields">
          <li className="field">
            <label>Current Weight:</label>
            <input
            type="text"
            onChange={handleInput('current_weight')}
            value={current_weight}
            />
            <span className="unit">lbs</span>
          </li>

          <li className="field">
            <label>Height:</label>
            <input
            type="text"
            onChange={handleWeightInput('feet')}
            value={feet}
            />
            <span className="unit">ft </span>

            <input
            type="text"
            onChange={handleWeightInput('inches')}
            value={inches}
            />
            <span className="unit">in</span>
          </li>

          <li className="field">
            <label>Goal Weight:</label>
            <input
            type="text"
            onChange={handleInput('goal_weight')}
            value={goal_weight}
            />
            <span className="unit">lbs</span>
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
            <label className="radio gender" htmlFor="male">Male</label>

            <input
            type="radio"
            id="female"
            name="gender"
            value="F"
            className="radio"
            onChange={handleInput('gender')}
            />
            <label className="radio gender" htmlFor="female">Female</label>
          </li>

          <li className="field">
            <label>Date of Birth:</label>
            <select className="month" value={month} onChange={handleDateInput('month')}>
              {monthOptions}
            </select>

            <select className="day" defaultValue={day} onChange={handleDateInput('day')}>
              {dayOptions}
            </select>

            <select className="year" defaultValue={year} onChange={handleDateInput('year')}>
              {yearOptions}
            </select>

          </li>

          <li className="field">
            <label>Username:</label>
            <input
            type="text"
            className="username"
            onChange={handleInput('username')}
            value={username}
            />
            <span>4-30 characters, no space</span>
          </li>

          <li className="activity-field">
            <ul className="activity-choices">
              <li>
                <label className="activity field-header">How would you describe your normal daily activities?</label>
              </li>

              <li>
                <input className="radio" type="radio" id="1" name="activity" value="1" onChange={handleInput('activity_level')}/>
                <label className="activity" htmlFor="1">Sedentary: <span className="notbold">{SEDENTARY}</span></label>
              </li>

              <li>
              <input className="radio" type="radio" id="2" name="activity" value="2" onChange={handleInput('activity_level')}/>
              <label className="activity" htmlFor="2">Lightly Active: <span className="notbold">{LIGHTLY_ACTIVE}</span></label>
              </li>

              <li>
                <input className="radio" type="radio" id="3" name="activity" value="3" onChange={handleInput('activity_level')}/>
                <label className="activity" htmlFor="3">Active: <span className="notbold">{ACTIVE}</span></label>
              </li>

              <li>
                <input className="radio" type="radio" id="4" name="activity" value="4" onChange={handleInput('activity_level')}/>
                <label className="activity" htmlFor="4">Very Active: <span className="notbold">{VERY_ACTIVE}</span></label>
              </li>
            </ul>

          </li>

          <li className="goal-field">
            <label className="goal field-header">What is your goal?</label>
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
