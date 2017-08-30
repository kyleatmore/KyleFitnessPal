import React from 'react';
import ExerciseDiaryIndexItem from './exercise_diary_index_item';
// import EditFoodFormContainer from './edit_food_form_container';
import { Link } from 'react-router-dom';

class ExerciseDiaryIndex extends React.Component {
  constructor(props) {
      super(props);
      this.state = { selectedEntry: "" };
      this.selectEntry = this.selectEntry.bind(this);
      this.clearSelectedEntry = this.clearSelectedEntry.bind(this);
  }

  selectEntry(entry) {
    return (e) => {
      this.setState({ selectedEntry: entry });
    };
  }

  clearSelectedEntry() {
    this.setState({ selectedEntry: "" });
  }

  render() {
    const exerciseItems = this.props.exerciseEntries.map((entry) => {
      return <ExerciseDiaryIndexItem
                key={entry.exerciseLogging.id}
                entry={entry}
                diary={this.props.exerciseDiary}
                deleteExerciseEntry={this.props.deleteExerciseEntry}
                selectEntry={this.selectEntry}/>;
    });
    const { currentUser, exerciseDiary } = this.props;
    const { dailySummary} = exerciseDiary;

    return (
      <div>
        <table>
          <tbody>
            <tr className="meal-category">
              <th className="diary category first">Exercise</th>
              <th className="macro-header diary-row">Minutes</th>
              <th className="macro-header diary-row">Calories Burned</th>
            </tr>

            {exerciseItems}

            <tr>
              <td className="diary-item first add-food">
                <Link
                  to={`/exercise-diary/${this.props.exerciseDiary.id}/log-exercise`}>
                  Add Exercise
                </Link>
              </td>
            </tr>

            <tr>
              <td className="empty-row"></td>
            </tr>

            <tr className="diary-totals">
              <td className="total-category">Daily Total / Goal</td>
              <td className="diary-row">{`${dailySummary.minutes} / 30`}</td>
              <td className="diary-row">{`${dailySummary.cals_burned} / 200`}</td>
            </tr>

            <tr className="diary-totals">
              <td className="total-category">Weekly Total / Goal</td>
              <td className="diary-row">{`TBD / 90`}</td>
              <td className="diary-row">{`TBD / 600`}</td>
            </tr>
          </tbody>
        </table>


      </div>
    );
  }
}

export default ExerciseDiaryIndex;
