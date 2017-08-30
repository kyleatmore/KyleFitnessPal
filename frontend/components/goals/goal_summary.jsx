import React from 'react';
import { withRouter } from 'react-router-dom';

const GoalSummary = ({ currentUser, history }) => {
  const {
    calorie_allowance,
    carb_allowance,
    protein_allowance,
    fat_allowance,
    goal_details
  } = currentUser;
  const date = new Date();
  date.setDate(date.getDate() + 35);
  const months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const goalVerb = goal_details.type === "loss" ? "lose" : "gain";

  return (
    <div className="signup-container part2 goals">
      <h2>Your Suggested Fitness And Nutrition Goals</h2>
        <p>
          Congratulations! Your personalized diet and
          fitness profile is now complete. Based on your answers, here are your
          suggested nutrition and fitness goals
        </p>

      <section className="nutrition goals">
        <table className="collapse-borders">
          <tbody>
            <tr>
              <th className="goal-header title">Nutritional Goals</th>
              <th className="goal-header target">Target</th>
            </tr>
            <tr>
              <td className="first goal-row">Net Calories Consumed* / Day</td>
              <td className="first goal-row target">{calorie_allowance} Calories / Day</td>
            </tr>
            <tr>
              <td className="goal-row">Carbs / Day</td>
              <td className="goal-row target">{carb_allowance} g</td>
            </tr>
            <tr>
              <td className="goal-row">Fat / Day</td>
              <td className="goal-row target">{fat_allowance} g</td>
            </tr>
            <tr>
              <td className="goal-row">Protein / Day</td>
              <td className="goal-row target">{protein_allowance} g</td>
            </tr>
          </tbody>
        </table>
        <p className="table-footer">
          *Net calories consumed = total calories consumed - exercise calories
          burned. So the more you exercise, the more you can eat!
        </p>
      </section>

      <section className="fitness goals">
        <table className="collapse-borders">
          <tbody>
            <tr>
              <th className="goal-header title">Fitness Goals</th>
              <th className="goal-header target">Target</th>
            </tr>
            <tr>
              <td className="first goal-row">Calories Burned / Week</td>
              <td className="first goal-row target">600 Calories / Week</td>
            </tr>
            <tr>
              <td className="goal-row">Workouts / Week</td>
              <td className="goal-row target">3 workouts</td>
            </tr>
            <tr>
              <td className="goal-row">Minutes / Workout</td>
              <td className="goal-row target">30 minutes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="summary">
        <p className="goal-footer">If you follow this plan...</p>
        <p className="goal-projection">
          {`Your projected weight ${goal_details.type} is `}
          <strong className="red">
            {`${goal_details.perWeek}`}
          </strong>
        </p>
        <p className="goal-projection">
          {`You should ${goalVerb} `}
            <strong className="red">
              {`${goal_details.longTerm} by ${month} ${day}`}
            </strong>
        </p>

        <input
          className="get-started button"
          type="submit"
          value="Get Started Now!"
          onClick={(e) => {
            e.preventDefault();
            history.push("/");
          }}
          />
      </section>

    </div>
  );
};

export default withRouter(GoalSummary);
