import React from 'react';
// import ExerciseDiaryHeader from './exercise_diary_header';
// import ExerciseDiaryIndex from './exercise_diary_index';
// import SearchContainer from '../search/search_container';

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

    return (
      <div className="exercise-diary-container">
        It worked!
      </div>
    );
  }
}

export default ExerciseDiary;
