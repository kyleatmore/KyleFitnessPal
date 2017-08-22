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
    <div>
      <h3>Tell Us About Yourself</h3>
      <form>
        <label>Height:
          <input
            type="text"
            onChange={handleInput('height')}
            value={height}
            />
        </label>

        <label>Current Weight:
          <input
            type="text"
            onChange={handleInput('current_weight')}
            value={current_weight}
            />
        </label>

        <label>Goal Weight:
          <input
            type="text"
            onChange={handleInput('goal_weight')}
            value={goal_weight}
            />
        </label>

        <label>Gender:
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="M"
            onChange={handleInput('gender')}
          />

          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="F"
            onChange={handleInput('gender')}
          />
        </label>

        <label>Date of Birth:
          <input
            type="date"
            onChange={handleInput('birth_date')}
          />
        </label>

        <label>Username:
          <input
            type="text"
            onChange={handleInput('username')}
            value={username}
            />
        </label>

        <br />

        <h3>How would you describe your normal daily activities?</h3>
          <input type="radio" id="1" name="activity" value="1" onChange={handleInput('activity_level')}/>
          <label htmlFor="1">{SEDENTARY}</label>

          <input type="radio" id="2" name="activity" value="2" onChange={handleInput('activity_level')}/>
          <label htmlFor="2">{LIGHTLY_ACTIVE}</label>

          <input type="radio" id="3" name="activity" value="3" onChange={handleInput('activity_level')}/>
          <label htmlFor="3">{ACTIVE}</label>

          <input type="radio" id="4" name="activity" value="4" onChange={handleInput('activity_level')}/>
          <label htmlFor="4">{VERY_ACTIVE}</label>

        <h3>What is your goal?</h3>
          <select name="goal_description" defaultValue="-1.0" onChange={handleInput('goal_description')}>
            <option value="-2.0">{GOAL_1}</option>
            <option value="-1.5">{GOAL_2}</option>
            <option value="-1.0">{GOAL_3}</option>
            <option value="0.5">{GOAL_4}</option>
            <option value="0">{GOAL_5}</option>
            <option value="0.5">{GOAL_6}</option>
            <option value="1">{GOAL_7}</option>
          </select>

        <input
          type="submit"
          onClick={handleSubmit}
        />
      </form>

    </div>
  )
}

export default SignUpPart2;
