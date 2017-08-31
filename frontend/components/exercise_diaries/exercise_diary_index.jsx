import React from 'react';
import ExerciseDiaryIndexItem from './exercise_diary_index_item';
import EditExerciseFormContainer from './edit_exercise_form_container';
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
    const { dailySummary, weeklySummary } = exerciseDiary;

    return (
      <div>
        <table>
          <tbody>
            <tr className="meal-category">
              <th className="diary category first">Exercise</th>
              <th className="exercise-header diary-row">Minutes</th>
              <th className="exercise-header diary-row">Calories Burned</th>
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
              <td className="total-category">Daily Total / <span className="exercise-target">Goal</span></td>
              <td className="diary-row">{`${dailySummary.minutes} / `}
                <span className="exercise-target">30</span>
              </td>
              <td className="diary-row">{`${dailySummary.cals_burned} / `}
                <span className="exercise-target">200</span>
              </td>
            </tr>

            <tr className="diary-totals">
              <td className="total-category">Weekly Total / <span className="exercise-target">Goal</span></td>
              <td className="diary-row">{`${weeklySummary.minutes} / `}
                <span className="exercise-target">90</span>
              </td>
              <td className="diary-row">{`${weeklySummary.cals_burned} / `}
                <span className="exercise-target">600</span>
              </td>
            </tr>
          </tbody>
        </table>

        <EditExerciseFormContainer
          selectedEntry={this.state.selectedEntry}
          clearSelectedEntry={this.clearSelectedEntry}
          diary={exerciseDiary}
        />
      </div>
    );
  }
}

export default ExerciseDiaryIndex;
