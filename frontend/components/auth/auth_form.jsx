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
    current_weight: "",
    goal_weight: "",
    activity_level: "",
    goal_description: ""
  },
  step: 1,
};

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
    } else if (step === 2) {
      return (
        <div>
          <h3>Tell Us About Yourself</h3>
          <form>
            <label>Height:
              <input
                type="text"
                onChange={this.handleInput('height')}
                value={this.state.user.height}
                />
            </label>

            <label>Current Weight:
              <input
                type="text"
                onChange={this.handleInput('current_weight')}
                value={this.state.user.current_weight}
                />
            </label>

            <label>Goal Weight:
              <input
                type="text"
                onChange={this.handleInput('goal_weight')}
                value={this.state.user.goal_weight}
                />
            </label>

            <label>Gender:
              <input type="radio" id="male" name="gender" value="M"/>
              <label htmlFor="male">Male</label>

              <input type="radio" id="female" name="gender" value="F"/>
              <label htmlFor="female">Female</label>
            </label>

            <label>Date of Birth:
              <input type="date"/>
            </label>

            <br />

            <h3>How would you describe your normal daily activities?</h3>
              <input type="radio" id="1" name="activity" value={SEDENTARY}/>
              <label htmlFor="1">{SEDENTARY}</label>

              <input type="radio" id="2" name="activity" value={LIGHTLY_ACTIVE}/>
              <label htmlFor="2">{LIGHTLY_ACTIVE}</label>

              <input type="radio" id="3" name="activity" value={ACTIVE}/>
              <label htmlFor="3">{ACTIVE}</label>

              <input type="radio" id="4" name="activity" value={VERY_ACTIVE}/>
              <label htmlFor="4">{VERY_ACTIVE}</label>

            <h3>What is your goal?</h3>
              <select name="goal_description">
                <option value={GOAL_1}>{GOAL_1}</option>
                <option value={GOAL_2}>{GOAL_2}</option>
                <option value={GOAL_3} defaultValue>{GOAL_3}</option>
                <option value={GOAL_4}>{GOAL_4}</option>
                <option value={GOAL_5}>{GOAL_5}</option>
                <option value={GOAL_6}>{GOAL_6}</option>
                <option value={GOAL_7}>{GOAL_7}</option>
              </select>

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
