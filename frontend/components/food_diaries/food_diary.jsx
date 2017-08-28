import React from 'react';
import FoodDiaryHeader from './food_diary_header';
import FoodDiaryIndex from './food_diary_index';
import SearchContainer from '../search/search_container';

class FoodDiary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Object.keys(this.props.foods).length === 0) {
      this.props.requestAllFoods()
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
    if (!this.props.diary) return null;

    return (
      <div className="food-diary-container">
        <FoodDiaryHeader
          diaryDate={this.props.diary.date_string}
          currentUser={this.props.currentUser}
          currentDate={this.props.currentDate}
          foodDiaries={this.props.foodDiaries}
        />
        <FoodDiaryIndex
          currentUser={this.props.currentUser}
          diary={this.props.diary}
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
