import React from 'react';
import DiaryHeader from './diary_header';
import FoodDiaryIndex from './food_diary_index';
import SearchContainer from '../search/search_container';

class FoodDiary extends React.Component {
  constructor(props) {
    super(props);
    this.resumeTour = this.resumeTour.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.foods).length === 0) {
      this.props.requestAllFoods()
      .then(() => {
        this.props.requestSingleDiary(this.props.match.params.diaryId)
          .then(
            () => {
              const diaryDate = this.props.diary.date;
              this.props.findExerciseDiary(diaryDate);
            }
          );
      });
    } else {
      this.props.requestSingleDiary(this.props.match.params.diaryId)
        .then(
          () => {
            const diaryDate = this.props.diary.date;
            this.props.findExerciseDiary(diaryDate);
          }
        );
    }

    this.resumeTour();
  }

  resumeTour() {
    const steps = [
      {
        title: 'Food Diaries',
        text: 'Click here to switch between diaries on different days',
        selector: '.food-diary.date',
        position: 'right',
        nextPage: null,
      },
      {
        title: 'Adding Food Entries',
        text: 'Click here to add a food to today\'s diary',
        selector: '.diary-item.first.add-food',
        position: 'left',
        nextPage: null,
      },
    ];
    this.props.addSteps(steps);
    this.props.resumeJoyride();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.diaryId !== newProps.match.params.diaryId) {
      this.props.requestSingleDiary(newProps.match.params.diaryId);
    }
  }

  render() {
    if (!this.props.diary || !this.props.exerciseDiary) return null;

    return (
      <div className="food-diary-container">
        <DiaryHeader
          diaryDate={this.props.diary.date_string}
          currentUser={this.props.currentUser}
          diary={this.props.diary}
          findDiary={this.props.findDiary}
          findExerciseDiary={this.props.findExerciseDiary}
          type="Food"
        />
        <FoodDiaryIndex
          currentUser={this.props.currentUser}
          diary={this.props.diary}
          exerciseDiary={this.props.exerciseDiary}
          breakfastEntries={this.props.breakfastEntries}
          lunchEntries={this.props.lunchEntries}
          dinnerEntries={this.props.dinnerEntries}
          deleteFoodEntry={this.props.deleteFoodEntry}
        />
      </div>
    );
  }
}

export default FoodDiary;
