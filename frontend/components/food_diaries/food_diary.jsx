import React from 'react';
import FoodDiaryHeader from './food_diary_header';
import FoodDiaryIndex from './food_diary_index';

class FoodDiary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleDiary(this.props.match.params.diaryId);
  }

  render() {
    if (!this.props.diary) return null;

    return (
      <div className="food-diary-container">
        <FoodDiaryHeader date={this.props.diary.date}/>
        <FoodDiaryIndex
          breakfastEntries={this.props.breakfastEntries}
          lunchEntries={this.props.lunchEntries}
          dinnerEntries={this.props.dinnerEntries}
        />
      </div>
    );
  }
}

export default FoodDiary;
