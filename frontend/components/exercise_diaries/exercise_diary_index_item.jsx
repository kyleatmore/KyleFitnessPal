import React from 'react';

class ExerciseDiaryIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteExerciseEntry(this.props.diary, this.props.entry.exerciseLogging);
  }

  render() {
    const { entry, deleteExerciseEntry } = this.props;

    return (
      <tr>
        <td
          className="diary-item first"
          onClick={this.props.selectEntry(entry)}
        >
          {entry.exercise.name}
        </td>
        <td className="diary-item diary-row">{entry.minutes}</td>
        <td className="diary-item diary-row">{entry.calories}</td>
        <td
          className="diary-item diary-row delete-entry"
          onClick={this.handleClick}
        >
          &#x232b;
        </td>
      </tr>
    );
  }
}

export default ExerciseDiaryIndexItem;
