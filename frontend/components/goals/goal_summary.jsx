import React from 'react';

const GoalSummary = (props) => {
  return (
    <div className="signup-container part2">
      <h2>Your Suggested Fitness And Nutrition Goals</h2>
        <p>Congratulations! Your personalized diet and fitness profile is now
        complete. Based on your answers, here are your suggested nutrition and
        fitness goals</p>

      <section className="nutrition goals">
        <table>
          <tr>
            <th>Nutritional Goals</th>
            <th>Target</th>
          </tr>
          <tr>
            <th>Net Calories Consumed* / Day</th>
            <th>1,000 Calories / Day</th>
          </tr>
          <tr>
            <th>Carbs / Day</th>
            <th>100.0 g</th>
          </tr>
          <tr>
            <th>Fat / Day</th>
            <th>100.0 g</th>
          </tr>
          <tr>
            <th>Protein / Day</th>
            <th>100.0 g</th>
          </tr>
        </table>
        <p>
          *Net calories consumed = total calories consumed - exercise calories
          burned. So the more you exercise, the more you can eat!
        </p>
      </section>

      <section className="fitness goals">
        <table>
          <tr>
            <th>Fitness Goals</th>
            <th>Target</th>
          </tr>
          <tr>
            <th>Calories Burned / Week / Day</th>
            <th>1,000 Calories / Day</th>
          </tr>
          <tr>
            <th>Workouts / Week</th>
            <th>3 workouts</th>
          </tr>
          <tr>
            <th>Minutes / Workout</th>
            <th>100.0 g</th>
          </tr>
          <tr>
            <th>Protein / Day</th>
            <th>100.0 g</th>
          </tr>
        </table>
      </section>

      <section className="summary">
        <p>If you follow this plan...</p>
        <h2>Your projected weight loss is 1 lb/week</h2>
        <h2>You should lose 5lbs by September 19</h2>
      </section>

      <input
      className="button"
      type="submit"
      value="Get Started Now!"
      />
    </div>
  );
};

export default GoalSummary;
