import React from 'react';
import DiaryHeader from '../food_diaries/diary_header';
import ExerciseDiaryIndex from './exercise_diary_index';

class ExerciseDiary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Object.keys(this.props.exercises).length === 0) {
      this.props.requestAllExercises()
      .then(() => {
        this.props.requestSingleDiary(this.props.match.params.diaryId);
      });
    } else {
      this.props.requestSingleDiary(this.props.match.params.diaryId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.diaryId !== newProps.match.params.diaryId) {
      this.props.requestSingleDiary(newProps.match.params.diaryId);
    }
  }

  render() {
    if (!this.props.exerciseDiary) return null;
    debugger
    return (
      <div className="food-diary-container">
        <DiaryHeader
          diaryDate={this.props.exerciseDiary.date_string}
          currentUser={this.props.currentUser}
          diary={this.props.exerciseDiary}
          findDiary={this.props.findExerciseDiary}
          type="Exercise"
        />
        <ExerciseDiaryIndex
          currentUser={this.props.currentUser}
          exerciseDiary={this.props.exerciseDiary}
          exerciseEntries={this.props.exerciseEntries}
          deleteExerciseEntry={this.props.deleteExerciseEntry}
        />
      </div>
    );
  }
}

export default ExerciseDiary;
