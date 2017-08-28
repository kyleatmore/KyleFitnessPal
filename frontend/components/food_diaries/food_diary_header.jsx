import React from 'react';
import { Link } from 'react-router-dom';

class FoodDiaryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log("Click");
  }

  render() {
    return (
      <div className="food-diary header">
        <h1>Your Food Diary For:</h1>
        <div className="food-diary date">
          <Link
          className="prev-diary"
          to="/"
          onClick={this.handleClick}
          >&#9664;</Link>
          <time>{this.props.diaryDate}</time>
          <Link className="next-diary" to="/">&#9654;</Link>
        </div>
      </div>
    );
  }
}

export default FoodDiaryHeader;
