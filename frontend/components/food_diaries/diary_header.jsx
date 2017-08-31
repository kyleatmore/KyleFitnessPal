import React from 'react';
import { Link } from 'react-router-dom';

class FoodDiaryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(direction) {
    return (e) => {
      e.preventDefault();
      const nextDiaryDate = new Date(this.props.diary.date);

      if (direction === "next") {
        nextDiaryDate.setDate(nextDiaryDate.getDate() + 2);
      } else {
        nextDiaryDate.setDate(nextDiaryDate.getDate());
      }

      this.props.findDiary(nextDiaryDate);
    };
  }

  render() {
    return (
      <div className="food-diary header">
        <h1>{`Your ${this.props.type} Diary For:`}</h1>
        <div className="food-diary date">
          <Link
            className="prev-diary"
            to="/"
            onClick={this.handleClick("prev")}
          >&#9664;</Link>

          <time>{this.props.diaryDate}</time>

          <Link
            className="next-diary"
            to="/"
            onClick={this.handleClick("next")}
          >&#9654;</Link>
        </div>
      </div>
    );
  }
}

export default FoodDiaryHeader;
