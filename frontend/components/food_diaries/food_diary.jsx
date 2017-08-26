import React from 'react';
import FoodDiaryHeader from './food_diary_header';
import FoodDiaryIndex from './food_diary_index';

class FoodDiary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllFoods();
  }

  render() {
    return (
      <div className="food-diary-container">
        <FoodDiaryHeader date={this.props.diary.date}/>
        <FoodDiaryIndex />
      </div>
    );
  }
}

export default FoodDiary;
