import React from 'react';
// import ExerciseDiaryIndexItem from './food_diary_index_item';
// import ExerciseDiaryTotal from './food_diary_total';
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
    debugger
    const exerciseItems = this.props.exerciseEntries.map((entry) => {
      return <td>{entry.exercise.name}</td>;
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

            <tr>
              {exerciseItems}
            </tr>

            <tr>
              <td className="diary-item first add-food">
                <Link to={`/`}>Add Exercise</Link>
              </td>
            </tr>

            <tr>
              <td className="empty-row"></td>
            </tr>

            <tr className="diary-totals">
              <td className="total-category">Daily Total / Goal</td>
              <td className="diary-row">{`${dailySummary.minutes} / 30`}</td>
              <td className="diary-row">{`${dailySummary.cals_burned} / 600`}</td>
            </tr>

            <tr className="diary-totals">
              <td className="total-category">Weekly Total / Goal</td>
              <td className="diary-row">{`TBD`}</td>
              <td className="diary-row">{`TBD`}</td>
            </tr>
          </tbody>
        </table>


      </div>
    );
  }
}

export default ExerciseDiaryIndex;
